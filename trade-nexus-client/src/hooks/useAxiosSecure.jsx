import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import Swal from 'sweetalert2';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();

  useEffect(() => {
    if (!user) return;

    let requestInterceptor;
    let responseInterceptor;

    const setupInterceptors = () => {
      requestInterceptor = axiosSecure.interceptors.request.use(async (config) => {
        if (user) {
          const token = await user.getIdToken(true);
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      });

      responseInterceptor = axiosSecure.interceptors.response.use(
        res => res,
        async err => {
          const originalRequest = err.config;

          
          if (
            (err.response?.status === 401 || err.response?.status === 403) &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true;
            try {
              const freshToken = await user.getIdToken(true);
              originalRequest.headers.authorization = `Bearer ${freshToken}`;
              return axiosSecure(originalRequest);
            } catch (refreshErr) {
              console.error('Token refresh failed:', refreshErr);
            }
          }

          const msg = err.response?.data?.message;
          if (
            msg === 'InvalidToken' ||
            msg === 'TokenExpired' ||
            err.response?.status === 403 ||
            err.response?.status === 401
          ) {
            
            Swal.fire({
              icon: 'error',
              title: 'Session Expired',
              text: 'Your session has expired or you are not authorized.',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK',
            }).then(() => {
              signOutUser()
                .then(() => {
                  console.warn('Signed out due to invalid/expired token');
                })
                .catch(console.error);
            });
          }

          return Promise.reject(err);
        }
      );
    };

    setupInterceptors();

    return () => {
      if (requestInterceptor !== undefined)
        axiosSecure.interceptors.request.eject(requestInterceptor);
      if (responseInterceptor !== undefined)
        axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutUser]);

  return axiosSecure;
};

export default useAxiosSecure;

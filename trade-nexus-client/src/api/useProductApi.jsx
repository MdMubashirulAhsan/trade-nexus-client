
import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useProductApi = () => {
    const axiosSecure = useAxiosSecure();

    const myProductPromise = email => {
        return axiosSecure.get(`/myProduct?email=${email}`)
            .then(res => res.data)
    }
    return {
        myProductPromise
        
    };
};

export default useProductApi;


import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useCartApi = () => {
    const axiosSecure = useAxiosSecure();

    const myCartPromise = email => {
        return axiosSecure.get(`/myCart?email=${email}`)
            .then(res => res.data)
    }

    return {
        myCartPromise
    };
};

export default useCartApi;

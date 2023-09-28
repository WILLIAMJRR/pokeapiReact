import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtecteRoutes = () => {

    const { nameTrainer } = useSelector((state) => state);

    //8.3 si nametrainer tiene mas de 3 caracteres entra al oulet si no hace nada
    if (nameTrainer.length > 1) {

        return <Outlet />;
    } else {

        return <Navigate to='/' />;
    }
};

export default ProtecteRoutes;

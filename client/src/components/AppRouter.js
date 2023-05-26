import React, { Component, useCallback, useContext } from 'react';
import { Routes, Route, Redirect, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import {observer} from 'mobx-react-lite'

const AppRouter = observer( () => {
    const {user} = useContext(Context)

    console.log(user)
    console.log(user.isAdmin)
    return (
        <Routes>
            {user.isAuth && user.isAdmin && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
    );
});

export default AppRouter;
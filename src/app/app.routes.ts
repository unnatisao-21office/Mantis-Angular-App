import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { NewAccount } from './pages/new-account/new-account';
import { ForgetPassword } from './pages/forget-password/forget-password';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },{
        path: 'newAccount',
        component: NewAccount
    },{
        path: 'forgotPassword',
        component: ForgetPassword
    }
];

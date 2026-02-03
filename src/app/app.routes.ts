import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { NewAccount } from './pages/new-account/new-account';
import { ForgetPassword } from './pages/forget-password/forget-password';
import { CheckEmail } from './pages/check-email/check-email';
import { ResetPassword } from './pages/reset-password/reset-password';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },{
        path: 'new-account',
        component: NewAccount
    },{
        path: 'forgot-password',
        component: ForgetPassword
    },{
        path: 'check-email',
        component: CheckEmail
    },{
        path: 'reset-password',
        component: ResetPassword
    }
];

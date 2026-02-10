import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { NewAccount } from './pages/new-account/new-account';
import { ForgetPassword } from './pages/forget-password/forget-password';
import { CheckEmail } from './pages/check-email/check-email';
import { ResetPassword } from './pages/reset-password/reset-password';
import { VerificationCode } from './pages/verification-code/verification-code';
import { ComingSoon } from './pages/coming-soon/coming-soon';
import { ContactUs } from './pages/contact-us/contact-us';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page-404/page-404';
import { Page500 } from './pages/page-500/page-500';
import { UnderConstruction } from './pages/under-construction/under-construction';

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
    },{
        path:'verification-code',
        component: VerificationCode
    },{
        path: 'coming-soon',
        component: ComingSoon
    },{
        path: 'contact-us',
        component: ContactUs
    },{
        path: 'home',
        component: Home
    },{
        path: 'page-404',
        component: Page404
    },{
        path: 'page-500',
        component: Page500
    },
    {
        path: 'under-construction',
        component: UnderConstruction
    }
];

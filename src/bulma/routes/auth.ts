// Importing store from '@liberu-ui/ui/src/core/services/store'
import store from '@liberu-ui/ui/src/core/services/store';

// Importing Login component from '../pages/auth/Login.vue'
const Login = () => import('../pages/auth/Login.vue');
// Importing Email component from '../pages/auth/password/EmailResetLink.vue'
const Email = () => import('../pages/auth/password/EmailResetLink.vue');
// Importing Reset component from '../pages/auth/password/Reset.vue'
const Reset = () => import('../pages/auth/password/Reset.vue');

/**
 * Function to redirect to the home page if already authenticated.
 * @param to - The route to redirect
 * @param from - The current route
 * @param next - Function to execute the next route
 */
const redirect = (to: Route, from: Route, next: Function): void => {
    if (store.state.auth.isAuth) {
        next({ path: '/' }); // If authenticated, redirect to home page
    } else {
        next(); // Otherwise, proceed to the next route
    }
};

export default [{
    name: 'login',
    path: '/login',
    component: Login,
    beforeEnter: redirect,
    meta: {
        guestGuard: true,
        title: 'Login',
    },
}, {
    path: '/password/reset',
    name: 'password.email',
    component: Email,
    beforeEnter: redirect,
    meta: {
        guestGuard: true,
        title: 'Email Reset Link',
    },
}, {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: Reset,
    beforeEnter: redirect,
    meta: {
        guestGuard: true,
        title: 'Reset Password',
    },
}];
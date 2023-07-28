import type { Route, Screens } from './types';

export const screens: Screens = {
    AUTHSTACK: 'AuthStack',
    LOGIN: 'Login',
    SIGNUP: 'Signup',
    HOMESTACK: 'HomeStack',
    HOME: 'Home',
};

export const routes: Route[] = [
    {
        name: screens.AUTHSTACK,
        title: 'AuthStack',
    },
    {
        name: screens.LOGIN,
        title: 'Se connecter',
    },
    {
        name: screens.SIGNUP,
        title: "S'inscrire",
    },
    {
        name: screens.HOMESTACK,
        title: 'HomeStack',
    },
    {
        name: screens.HOME,
        title: 'Accueil',
    },
];

type ScreensName = 'AuthStack' | 'Login' | 'Signup' | 'HomeStack' | 'Home';

type Screens = {
    [key in Uppercase<ScreensName>]: ScreensName;
};

type Route = {
    name: ScreensName;
    title: string;
};

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

import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ScreensName =
    | 'AuthStack'
    | 'Login'
    | 'Signup'
    | 'HomeStack'
    | 'Home';

export type Screens = {
    [key in Uppercase<ScreensName>]: ScreensName;
};

export type HomeStackScreens = 'Home';
export type AuthStackScreens = 'Login' | 'Signup';

export type Route = {
    name: ScreensName;
    title: string;
};

// Créez un type intermédiaire pour extraire les noms d'écran de l'objet `screens`
type HomeScreens = {
    [key in HomeStackScreens]: undefined;
};

type AuthScreens = {
    [key in AuthStackScreens]: undefined;
};

// Créez un type pour le paramètre de la pile d'écrans
export type HomeStackParamList = {
    // Utilisez le type intermédiaire ici
    [key in keyof HomeScreens]: undefined;
};

export type AuthStackParamList = {
    // Utilisez le type intermédiaire ici
    [key in keyof AuthScreens]: undefined;
};

// Créez un type pour les props de l'écran
export type HomeProps = NativeStackScreenProps<
    HomeStackParamList,
    'Home',
    'HomeStack'
>;

export type AuthProps = NativeStackScreenProps<
    AuthStackParamList,
    'Login' | 'Signup',
    'AuthStack'
>;

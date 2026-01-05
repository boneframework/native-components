import {Context, createContext} from 'react';

type ThemeColors = {
    colors: {
        primary: string;
        secondary: string;
        black: string;
        white: string;
        light: string;
        whitish: string;
        medium: string;
        darkish: string;
        dark: string;
        danger: string;
        bgGradient: string[];
    }
};

const defaultTheme: ThemeColors = {
    colors: {
        primary: '#fc5c65',
        secondary: '#4ecdc4',
        black: '#000',
        white: '#fff',
        light: '#f0f4f4',
        whitish: '#ddd',
        medium: '#999',
        darkish: '#333',
        dark: '#222',
        danger: '#ff5200',
        bgGradient: ['#001C50', '#003698']
    }
};

const ThemeContext: Context<ThemeColors> = createContext<ThemeColors>(defaultTheme);

export default ThemeContext;
export { defaultTheme, ThemeColors };


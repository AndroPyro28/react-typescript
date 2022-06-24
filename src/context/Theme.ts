
 interface ThemeInterface {
    primary: {
        main: string,
        text: string
    },
    secondary: {
        main: string,
        text: string
    }
}

export type ThemeInterfaceOrNull = ThemeInterface | null // union type

export const theme: ThemeInterfaceOrNull = {
    primary: {
        main: '#3f51b5',
        text: '#fff'
    },
    secondary: {
        main: '#f50057',
        text: '#fff'
    }
}
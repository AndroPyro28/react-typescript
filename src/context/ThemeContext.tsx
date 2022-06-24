import { createContext, ReactNode } from "react";

import { theme, ThemeInterfaceOrNull} from "./Theme";

interface ThemeContextPropsInterface {
    children: ReactNode
}
// const ThemeContext = createContext<ThemeInterfaceOrNull>(null) 
const ThemeContext = createContext<typeof theme>(null) // alternative of ThemeInterfaceOrNull

 function ThemeContextProvider ({children}:ThemeContextPropsInterface) {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export {ThemeContext, ThemeContextProvider}
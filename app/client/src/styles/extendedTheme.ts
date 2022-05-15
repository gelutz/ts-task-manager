import { extendTheme } from "@chakra-ui/react";
import { style } from "./global";

export const extendedTheme = extendTheme({
    styles: {
        global: {
            ...style
        },
    }
})
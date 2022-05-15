import { FlexProps, StyleProps } from "@chakra-ui/react";

export type IStyleProps = {
    flex: { [key: string] : FlexProps } | FlexProps,
    global: { [key: string] : StyleProps } | StyleProps
}

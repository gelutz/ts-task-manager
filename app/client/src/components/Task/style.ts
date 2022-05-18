import { IStyleProps } from "../../styles/IStyleProps";

export const outer: IStyleProps['flex'] = {
    style: {
        border: '1px solid gray',
        display: 'flex',
        flexDirection: 'row',
        height: '4rem',
        font: 'status-bar',
        margin: '1rem 0',
        width: '100%'
    }
}

export const inner: IStyleProps['flex'] = {
    style: {
        w: '100%',

    }
}
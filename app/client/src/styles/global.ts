import { IStyleProps } from "./IStyleProps";

const bodyAndHtml = {
    height: 'auto',
    width: '100%',
    margin: 0,
    padding: 0,
}

export const style: IStyleProps['global'] = {
    html: bodyAndHtml,
    body: bodyAndHtml,
    // container: {
    //     display: 'block',
    //     width: '40em',
    //     backgroundColor: '#fff',
    //     padding: '0px 1em 1em 1em',
    //     borderRadius: '1em',
    // },
    h2: {
        textAlign: 'center',
        paddingTop: '10px',
        marginBottom: '0px',
    }

}

    

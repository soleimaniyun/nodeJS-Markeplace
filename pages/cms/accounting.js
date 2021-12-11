import React from "react";
import Head from 'next/head'
import {CMS_ACCOUNT} from '../../lib/constants'
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import MasterPage from "../../components/cms/layout/masterPage";
import Account from '../../components/cms/accounting/accountancy'
import CssBaseline from "@material-ui/core/CssBaseline";
import rtl from 'jss-rtl';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const  theme = createMuiTheme( {
    direction: 'rtl',
    typography: {
        fontFamily: [
            'IRANSans',
            'Sans',
            'Rosario',
            'Barcode',
            'Dastnevis',
            'AnjomanFaNum-Medium',
        ].join(','),
        fontSize: '0.8vw',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                fontFamily: 'IRANSans',
                fontSize: '0.8vw',
                direction: 'rtl',
                WebkitFontSmoothing: 'auto',
            },
        },
    },
});

export default function Index({preview}) {

    return (

        <MasterPage preview={preview}>
            <ThemeProvider theme={theme}>
                <StylesProvider jss={jss}>
                    <CssBaseline />
                    <div dir='rtl'>
                        <Head>
                            <title>{CMS_ACCOUNT}</title>
                            <link rel="icon" href="/images/favicon.ico"/>
                        </Head>

                        <Account/>

                    </div>
                </StylesProvider>
            </ThemeProvider>
        </MasterPage>

    )
}

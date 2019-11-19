// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js

/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body css={{ margin: 0 }}>
                    <Global styles={globalStyle} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

const globalStyle = {
    '*': {
        boxSizing: 'border-box',
        fontFamily: '-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif'
    },
    'h1, a': {
        // fontFamily: 'Times'
    },
    'ul': {
        padding: 0
    },
    'li': {
        listStyle: 'none',
        margin: '5px 0',
    },
    'a': {
        textDecoration: 'none',
        color: '#5864FF',
        transition: 'opacity ease-in .2s'
    },
    'a:hover': {
        opacity: 0.6,
    }
}
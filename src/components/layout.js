import React from 'react'
import { css } from '@emotion/core'
import SEO from './seo.js'
import Header from './header.js'
import Footer from './footer.js'

export default function Layout({ children }) {
    return (
        <div id="root" css={css`
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        `}>
            <SEO />
            <Header outerContainerId="root" pageWarpId="page" />
            <div id="page" css={css`flex-grow: 1; display: block`}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

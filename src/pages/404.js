import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout.js'
import display from '../assets/display.svg'
import { bp } from '../utils/breakpoints.js'

export default function NotFound() {
    return (
        <Layout>
            <div css={css`
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                margin-bottom: 1.5rem;
            `}> 
                <img src={display} css={css`
                    width: 60%;

                    @media (min-width: ${bp.small}px) {
                        width: 50%;
                    }
                `} alt="404 Not Found" />

                <p css={css`text-align: center`}>
                    The page you are looking for cannot be found
                </p>
               
                <button><Link to="/">Back to Home</Link></button>
            </div>
        </Layout>
    )
}

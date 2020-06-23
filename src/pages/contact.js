import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout.js'
import { colors } from '../utils/colors.js'
import { bp } from '../utils/breakpoints.js'

export default function Contact() {
    return (
        <Layout>
            <form action="https://getform.io/f/abb771dd-4b47-4d5e-92c6-323a614566ae" 
                css={css`
                    border: 1px solid ${colors.colorPrimaryDark};
                    margin: auto;
                    width: 90%;
                    padding: 1.5rem;
                    text-align: center;
                    justify-items: center;

                    @media (min-width: ${bp.small}px) {
                        width: 50%;
                    }
                    @media (min-width: ${bp.misc}px) {
                        width: 40%;
                    }
                `} method="POST">
                <h2 css={css`margin-bottom: 2rem`}>Say Hi</h2>

                <p>
                    <input aria-label="Name" type="text" name="name" 
                        placeholder="Your Name" required />
                </p>

                <p>
                    <input aria-label="Email" type="email" name="email" 
                        placeholder="Your Email" required />
                </p>

                <p>
                    <textarea rows="3" aria-label="Message" placeholder="Your Message..." 
                        type="textarea" name="message" required />
                </p>

                <button aria-label="Send" type="submit" css={css`color: ${colors.colorPrimary}`}>Send</button>
            </form>
        </Layout>
    )
}

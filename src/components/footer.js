import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const IconList = props => (
    <li css={css`
        display: inline-block;
        margin-top: 1rem;
        margin-right: 2rem;
    `}>
        <a href={props.to}>
            <FontAwesomeIcon icon={props.icon} css={css`font-size: 1.5rem`} />
        </a>
    </li>
)

export default function Footer() {
    return (
        <footer css={css`
            text-align: center;
            height: 4rem;
        `}>
            <hr css={css`margin: 0 1rem`} />

            <ul css={css`
                list-style: none;
                display: inline;
                justify-content: center;
                display: flex
                margin-bottom: -1rem;
            `}>
                <IconList to="https://github.com/nihitb06" icon={faGithub} />
                <IconList to="https://www.linkedin.com/in/nihitb06" icon={faLinkedin} />
                <IconList to="mailto:nihitb06.dev@gmail.com" icon={faEnvelope} />
            </ul>

            <p css={css`margin-bottom: 0`}>
                <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> by Nihit Bansal.
            </p>
        </footer>
    )
}

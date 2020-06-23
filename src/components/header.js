import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core'
import Menu from './menu.js'
import { bp } from '../utils/breakpoints.js'

const ListLink = props => (
    <li className="hoverable" css={css`
        display: inline-block;
        margin-right: 1.5rem;
    `}>
        <Link to={props.to} activeClassName="active">{props.children}</Link>
    </li>
);

export default function Header(props) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <header css={css`height: 4.5rem`}>
            <div css={css`
                @media (min-width: ${bp.small}px) {
                    display: none;
                }
            `}>
                <Menu pageWrapId={props.pageWrapId} 
                    outerContainerId={props.outerContainerId} />
            </div>

            <Link to="/" css={css`
                text-shadow: none;
                background-image: none;
                text-decoration: none;
                font-family: "Mr De Haviland", "Playfair Display", sans-serif;
                position: relative;
                margin: 1.5rem;

                @media (min-width: ${bp.small}px) {
                    top: 1rem;
                }
                @media (max-width: ${bp.small}px) {
                    float: right;
                }
            `}>
              <h1 className="title">{data.site.siteMetadata.title}</h1>
            </Link>

            <nav css={css`
                float: right;
                margin-top: 1.2rem;

                @media (max-width: ${bp.small}px) {
                    display: none;
                }
            `}>
                <ul css={css`list-style: none`}>
                  <ListLink to="/">Portfolio</ListLink>
                  <ListLink to="/about/">About</ListLink>
                  <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </nav>
        </header>
    );
}

import React from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout.js'
import indexData from '../../content/index.json'
import { colors } from '../utils/colors.js'
import { bp } from '../utils/breakpoints.js'

export default function Home({ data }) {
    return (
        <Layout>
            <div css={css`padding: 1.2rem; position: relative; display: block`}>
                <h2  css={css`
                    text-align: center;
                    margin-top: 3.5rem;
                `}>{indexData.byline}</h2>

                <div css={css`
                    max-width: 960px;
                    min-height: 0;
                    margin: 5rem auto 0 auto;

                    -webkit-column-break-inside: avoid;
                    page-break-inside: avoid;
                    break-inside: avoid;

                    columns: 2 250px;
                    column-gap: 2rem;

                    & div {
                        margin-top: 2rem;
                    }
                `}>
                    <div css={css`
                        text-align: right;

                        @media (min-width: ${bp.small}px) {
                            padding-top: 5rem;
                        }
                    `}>
                        <p css={css`margin-bottom: 0.6rem`}>{indexData.bio}</p>
                        <Link className="hoverable" to="/about"
                            css={css`color: ${colors.textColorPrimaryDark}`}>More about me</Link>
                    </div>

                    {indexData.projects.map((project, index) => {
                        return (
                            <div css={css`
                                background-color: ${project.color};
                                padding: 2rem 2rem 0 2rem;
                                width: 100%;
                                display: block;
                                -webkit-column-break-inside: avoid;
                                page-break-inside: avoid;
                                break-inside: avoid;
                            `}>
                                <h4 css={css`margin-bottom: 0.6rem`}>
                                    {project.title}
                                </h4>
                                <hr css={css`
                                    background-color: ${colors.textColorPrimaryInverse};
                                    height: 3px;
                                    width: 30px;
                                    border-radius: 5px;
                                `} />

                                <p css={css`max-width: 12em`}>{project.description}</p>
                                <p css={css`
                                    display: ${ project.gitLink === "" ? "none" : "block" }
                                `}>
                                    <a href={project.gitLink} target="_blank" rel="noreferrer" css={css`
                                        &:hover {
                                            text-decoration: underline;
                                        }
                                    `}>
                                        View Source on Github
                                        &nbsp;<FontAwesomeIcon icon={faLink} alt="Link opens in new tab" />
                                    </a>
                                </p>

                                <div css={css`
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: flex-start;
                                    margin-bottom: 3rem;
                                `}>
                                    <a css={css`
                                        display: ${ project.playLink === "" ? "none" : "inline-block" }
                                    `} href={project.playLink}>
                                        <img alt='Get it on Google Play' 
                                            css={css`
                                                margin: 0;
                                                height: 3rem;
                                            `}
                                            src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                                    </a>
                                </div>

                                <Img css={css`max-height: 400px`} 
                                    imgStyle={{ objectFit: `contain` }}
                                    fluid={data.allFile.edges[project.key].node.childImageSharp.fluid} 
                                    alt="Project Sample Image" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

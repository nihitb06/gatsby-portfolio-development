import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Layout from '../components/layout.js'
import { bp } from '../utils/breakpoints.js'
import aboutData from '../../content/about.json'

export default function About({ data }) {
    return (
        <Layout>
            <div id="header" css={css`
                width: 100%;
                margin-top: 2rem;
                padding: 0 2.5rem;
                display: flex;
                justify-content: center;

                @media (max-width: ${bp.medium}px) {
                    flex-direction: column;
                    text-align: center;
                }

                @media (min-width: ${bp.medium}px) {
                    flex-direction: row;
                    padding: 0 6.5rem;
                }
            `}>
                <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                    css={css`
                        min-width: 10rem;
                        border-radius: 5px;
                        box-shadow: 0.8333333333333334rem 1rem 1.5555555555555556rem 0rem rgba(0, 0, 0, 0.2);

                        @media (max-width: ${bp.medium}px) {
                            margin: 0 auto 1.2rem auto;
                        }
                        @media (min-width: ${bp.medium}px) {
                            margin: 0 2.1rem 0 auto;
                        }
                    `}
                    alt="Headshot" />

                <h2 css={css`
                    display: inline;
                    
                    @media (min-width: 1024px) {
                        font-size: 2rem;
                    }
                `}>{aboutData.About.info}</h2>
            </div>

            <div id="content" css={css`
                margin: 3rem 1.5rem;
                
                @media (min-width: ${bp.medium}px) {
                    width: 50%;
                    margin: 4rem auto;
                }
            `}>
                <h3>Experience</h3>

                <ul css={css`
                    list-style: none;
                    display: inline-block;
                    margin-left: 0;
                `}>
                    {aboutData.Work.map((job) => {
                        return (
                            <li css={css`&:last-child hr { display: none }`}>
                                <div css={css`font-size: 1.2rem; margin-top: 1.5rem;`}>
                                    <strong>{job.Company}</strong> &bull; {job.Position}
                                </div>
                                <h5 css={css`color: rgba(0,0,0,0.6); margin-bottom: 0.4rem`}>{job.Where}</h5>
                                <em>{job.When}</em>

                                <hr css={css`margin: 1.5rem 0`} />
                            </li>
                        )
                    })}
                </ul>

                <h3 css={css`margin-top: 1.5rem`}>Education</h3>

                <ul css={css`
                    list-style: none;
                    display: inline-block;
                    margin-left: 0;
                `}>
                    {aboutData.Education.map((course) => {
                        return (
                            <li css={css`&:last-child hr { display: none }`}>
                                <div css={css`font-size: 1.2rem; margin-top: 1.5rem;`}>
                                    <strong>{course.Institute}</strong>
                                </div>
                                <h5 css={css`color: rgba(0,0,0,0.6); margin-bottom: 0.4rem`}>{course.Degree}</h5>
                                <em>{course.When}</em>

                                <hr css={css`margin: 1.5rem 0`} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "avatar" } }) {
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

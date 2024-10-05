import { IAuthor } from "@/types"
import request, { gql } from "graphql-request"
import { cache } from "react"

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthors = async () => {
    const query = gql` 
        query MyQuery {
            authors {
                name
                slug
                bio
                authorImg {
                url
                }
            }
            }
    `
    const result = await request<{authors : IAuthor[]}>(graphqlApi,query)
    return result.authors
}

export const getAuthor =  cache( async (slug :string) => {
    const query = gql` 
    query MyQuery($slug : String!) {
        author(where: {slug: $slug}) {
            name
            bio
            authorImg {
            url
            }
            blogs {
            ... on Blog {
               title
                description
                id
                blogImg {
                url
                }
                slug
                author {
                name
                slug
                authorImg {
                    url
                }
                }
                tag {
                name
                slug
                }
                category {
                name
                slug
                }
                createdAt
                info {
                html
                }
            }
            }
        }
        }
    `
    const result = await request<{author : IAuthor}>(graphqlApi, query, {slug})
    return result.author
})
import { IAuthor } from "@/types"
import request, { gql } from "graphql-request"

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthor = async (slug :string) => {
    const query = gql` 
    query MyQuery($slug : Sting!) {
        author(where: {slug: $slug}) {
            name
            bio
            authorImg {
            url
            }
            blogs {
            ... on Blog {
                id
                description
            }
            }
        }
        }
    `
    const result = await request<{author : IAuthor}>(graphqlApi, query, {slug})
    return result.author
}
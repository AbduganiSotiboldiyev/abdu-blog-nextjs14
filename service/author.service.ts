import { IAuthor } from "@/types"
import request, { gql } from "graphql-request"

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthor = async () => {
    const query = gql` 
    query MyQuery {
        authors {
            name
            bio
            id
            authorImg {
            url
            }
        }
        }
    `
    const result = await request<{author : IAuthor}>(graphqlApi, query)
    return result.author
}
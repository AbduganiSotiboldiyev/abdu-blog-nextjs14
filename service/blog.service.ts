import { IBlog } from "@/types"
import request, {gql} from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
    const query = gql `
        query MyQuery {
            blogs {
                title
                description
                id
                blogImg {
                url
                }
                slug
                author {
                name
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
    `
    const result = await request<{blogs : IBlog[]}>(graphqlAPI, query)
    return result.blogs
}
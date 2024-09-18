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
    `
    const result = await request<{blogs : IBlog[]}>(graphqlAPI, query)
    return result.blogs
}

export const getDetailedPage = async (slug : string)=> {
    const query = gql `
        query MyQuery($slug: String!) {
            blog(where: {slug: $slug}) {
                id
                title
                createdAt
                info {
                html
                }
                description
                blogImg {
                url
                }
                author {
                bio
                name
                publishedAt
                authorImg {
                    url
                }
                }
                tag {
                name
                slug
                }
            }
            }
            

    `
    const result = await request<{blog : IBlog[]}>(graphqlAPI, query, {slug})
    return result.blog
}
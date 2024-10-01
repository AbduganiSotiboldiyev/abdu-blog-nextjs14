import { IBlog, IcategoriesAndTags } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCategory = async () =>{
    const query = gql`
        query MyQuery {
        categories {
            name
            slug
            blogs{
                id
            }
        }
        }
    `
    const result = await request<{categories : IcategoriesAndTags[]}>(graphqlAPI, query)
    return result.categories
}

export const getBlogsByCategory = cache( async (slug : string) => {
    const query = gql`
        query MyQuery($slug :String!) {
            category(where: {slug: $slug}) {
                name
                blogs {
                title
                description
                info {
                    html
                }
                blogImg {
                    url
                }
                createdAt
                author {
                    name
                    slug
                    authorImg {
                    url
                    }
                }
                category {
                    slug
                    name
                }
                 tag {
                    slug
                    name
                }
                }
            }
            }
    
    `
    const {category} = await request<{category : {blogs : IBlog[],name: string}}>(graphqlAPI,query,{slug})
    return category
})
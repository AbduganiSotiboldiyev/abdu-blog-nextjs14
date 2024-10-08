import { IBlog , IArchivedBlog} from "@/types"
import request, {gql} from "graphql-request"
import { cache } from "react"

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

export const getDetailedPage =cache( async (slug : string)=> {
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
                slug
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
    const {blog} = await request<{blog : IBlog}>(graphqlAPI, query, {slug})
    return blog
})

export const getSearchPanel =async (title : string) => {
    const query = gql`
        query MyQuery($title : String!) {
            blogs(where: {title_contains: $title}) {
                id
                slug
                title
                createdAt
                blogImg {
                url
                }
            }
            }
    `
    const result = await request<{blogs : IBlog[]}>(graphqlAPI,query, {title})
    return result.blogs
}

export const getArchivedBlogs = async () => {
    const query = gql`
        query MyQuery {
            blogs(where: {archive: true}) {
                id
                slug
                title
                createdAt
            }
            }
    `
    const {blogs} = await request<{blogs : IBlog[]}>(graphqlAPI, query)
    const filteredBlogs = blogs.reduce(
        (acc: {[year :string] :IArchivedBlog},blog :IBlog) =>{
            const year = blog.createdAt.substring(0,4)
            if(!acc[year]) {
                acc[year] ={year,blogs:[]}
            }
            acc[year].blogs.push(blog)
            return acc
           
        },{}
    )
    const results: IArchivedBlog[] = Object.values(filteredBlogs)
	return results
    
}



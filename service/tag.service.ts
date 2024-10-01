import { IBlog, IcategoriesAndTags } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTag = cache( async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blogs {
					description
					author {
						name
						slug
						authorImg {
							url
						}
						bio
					}
					info {
						html
					}
					createdAt
					blogImg {
						url
					}
					slug
					tag {
						name
						slug
					}
					category {
						name
						slug
					}
					title
				}
				name
			}
		}
	`

	const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
		graphqlAPI,
		query,
		{ slug }
	)
	return tag
})

export  const getTags = async () => {
	const query = gql`
		query MyQuery {
		tags {
			name
			slug
		}
		}
	`

	const  result = await request<{tags : IcategoriesAndTags[]}> (graphqlAPI, query)
	return result.tags
}
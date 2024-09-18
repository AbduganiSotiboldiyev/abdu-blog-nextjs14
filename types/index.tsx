export default interface ChildProps {
    children: React.ReactNode
}

export interface IBlog {
	title: string
	description: string
	id : string
	createdAt: string
	author: IAuthor
	slug : string
	blogImg : {url : string}
	tag : IcategoriesAndTags
	category : IcategoriesAndTags
	info : {html : string}
	
}

export interface IAuthor {
    name :  string
	slug : string
    authorImg: {url : string}
	blogs :IBlog[]
}

export interface IcategoriesAndTags {
	name: string
	slug: string
	blogs : IBlog[]
	author : IAuthor
}
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
    authorImg: {url : string}
}

export interface IcategoriesAndTags {
	name: string
	slug: string
	blogs : IBlog[]
	author : IAuthor
}
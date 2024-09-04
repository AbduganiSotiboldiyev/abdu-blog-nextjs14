export const Service = {
    getPosts : async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{cache : "force-cache"})
        if(response.ok) {
            throw new Error('Failed to fetch posts')
        }
        const data = response.json()
        return data
    }
}
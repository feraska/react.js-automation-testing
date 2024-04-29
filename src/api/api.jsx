export const getPosts = async ()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments",{
        method:"GET"
    })
    const data = await response.json()
    return data
}
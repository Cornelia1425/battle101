export async function videosLoader(){
    const response = await fetch ('http://localhost:4004/posters')

    const data = await response.json()

    console.log(data)
    return data
}
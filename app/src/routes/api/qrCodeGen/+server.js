import { json } from '@sveltejs/kit'

export async function GET(requestEvent){
    const {params} = requestEvent
    console.log(params)
    return json({message:"hello"})
}
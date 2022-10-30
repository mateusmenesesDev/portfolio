import axios from "axios"
import {Handler} from "@netlify/functions"

const accessToken = process.env.API_SECRET;
const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers:{'Authorization': `Bearer ${accessToken}`}
})

async function listRepo(){
  console.log('teste')
  const data = await githubApi.get('/user/repos')
  return data.data
}

const handler: Handler = async(event, context) =>{
  const data = await listRepo()
  return {
      statusCode: 200,
      body: JSON.stringify([...data])
  }
}

export { handler }





import axios from "axios"
import { accessToken } from "../config/access"
import { IProjetos } from "../types/types"
import {VercelRequest, VercelResponse} from '@vercel/node'

export default (req:VercelRequest, res:VercelResponse) =>{
    return res.json({
        msg: 'hello world'
    })
}
const githubApi = axios.create({
    baseURL: 'https://api.github.com/',
    headers:{'Authorization': `Bearer ${accessToken}`}
})

export const apiGitHub = {
    listRepo: async ()=>{
        const response = await githubApi.get('/user/repos')
        const projeto:IProjetos[] = response.data
        return projeto
    }
}
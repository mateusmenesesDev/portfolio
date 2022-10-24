import axios from "axios"
import { Octokit } from "octokit"
import { accessToken } from "../config/access"
import { IProjetos } from "../types/types"

const octokit = new Octokit({
    auth: accessToken
})

const http = axios.create({
    baseURL: 'https://api.github.com/',
    headers:{'Authorization': `Bearer ${accessToken}`}
})
export const apiGitHub = {
    listRepo: async ()=>{
        const response = await http.get('/user/repos')
        const projeto:IProjetos[] = response.data
        return projeto
    }
}
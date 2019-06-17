import axios from 'axios'

export let getHome =()=>{
    return axios.get('/static/mork/index.json')
}
export let getCity =()=>{
    return axios.get('/static/mork/city.json')
}
export let getDeta =(id)=>{
    return axios.get('/static/mork/decv/'+id+'.json')
}
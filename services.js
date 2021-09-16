/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:8000"
})

const login = (data)=>
axiosInstance({
    method : 'POST',
    url :'/user/login',
    data : data
})
const register = (data)=>
axiosInstance({
    method : 'POST',
    url :'/user/register',
    data : data
})
const addhotel = (hoteldata)=>
axiosInstance({
    method : 'POST',
    url :'/hotel/add',
    data : hoteldata
})
const  hotels = (hoteldata)=>
axiosInstance({
    method : 'GET',
    url :'/hotel',
    data : hoteldata
})
const addrecipe = (recipedata)=>
axiosInstance({
    method : 'POST',
    url :'/recipe/add',
    data : recipedata
})
const recipe = (recipedata)=>
axiosInstance({
    method : 'GET',
    url :'/recipe',
    data : recipedata
})
const users = (userdetails)=>
axiosInstance({
    method : 'GET',
    url :'/user/userdetails',
    data : userdetails
})
const practice = (data)=>{
    axiosInstance({
        method : 'POST',
        url : '/practice/post',
        data : data
    })
}  
export default {
    login, register, addhotel, hotels, addrecipe, recipe, users, practice
}

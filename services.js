/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:8000"
})

export default {
    login : (data)=>
    axiosInstance({
        method : 'POST',
        url :'/user/login',
        data : data
    }),
    register : (data)=>
    axiosInstance({
        method : 'POST',
        url :'/user/Register',
        data : data
    }), 
    addhotel : (hoteldata)=>
    axiosInstance({
        method : 'POST',
        url :'/hotel/add',
        data : hoteldata
    }),
    hotels : (hoteldata)=>
    axiosInstance({
        method : 'GET',
        url :'/hotel',
        data : hoteldata
    }),
    addrecipe : (recipedata)=>
    axiosInstance({
        method : 'POST',
        url :'/recipe/add',
        data : recipedata
    }),
    recipe : (recipedata)=>
    axiosInstance({
        method : 'GET',
        url :'/recipe',
        data : recipedata
    }), 
    users : (userdetails)=>
    axiosInstance({
        method : 'GET',
        url :'/user/userdetails',
        data : userdetails
    }) 

}

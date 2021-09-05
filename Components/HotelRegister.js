import axios from "../services";
import React, { useState } from "react"


const HotelRegister = ()=>{
    const [data, setData]=useState({
        HotelName :'',
        Locality : '',
        HotelType :'',

    })
    const [ HotelImg, setHotelImg]=useState()

    const changeHandler = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const Hoteldata = new FormData();
        Hoteldata.append("HotelName",data.HotelName)
        Hoteldata.append("Locality",data.Locality)
        Hoteldata.append("HotelType",data.HotelType)
        Hoteldata.append("HotelImg",HotelImg)
        console.log(Hoteldata)

        axios.post("/hotel/addhotel",Hoteldata)
        .then((res)=>{
            console.log(res)

        }
    
        ).catch((err)=>{
            console.log(err)
        });
    
    }


    return(
        <div className="page">
            <div className="text"> 
               <form className="Hotel" enctype="multipart/form-data" onSubmit={handleSubmit}>
                  <h3 id="head">Hoteldata</h3>
                   <label id="labels">Name</label>
                   <input type= " text" className="txtbox" placeholder="Hotel Name" name="HotelName"  onChange={changeHandler}  /> 
                   <label  id="labels">Locality</label>
                   <input type= "text"  className="txtbox" placeholder="address" name="Locality" onChange={changeHandler}   />
                   <label  id="labels">HotelType</label>
                   <input type= "text"  className="txtbox" placeholder="SouthIndian or  NorthIndian" name="HotelType" onChange={changeHandler}  />
                   <label>Upload</label>
                    <input type="file" className="txtbox"  name="HotelImg"  onChange={event=>{const file=event.target.files[0]; setHotelImg(file)}} />
                  <button id="button">Register</button>
                </form>
            </div>
      </div>
    )
    }



export default HotelRegister


import React from 'react'
import api from '../services'
import { useEffect, useState } from 'react'


function AddHotel(){
    const [hotel, setHotel]=useState({
        HotelName :'',
        Locality : '',
        HotelType :'',
    })
    const [success, setSuccess] = useState();
    const [data, setData]= useState([]);
    const [ HotelImg, setHotelImg]=useState()
    const changeHandler = (e)=>{
       setHotel({...hotel,[e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        // const Hoteldata = {HotelName : hotel.HotelName ,Locality : hotel.Locality, HotelType : hotel.HotelType, HotelImg : HotelImg}
        const Hoteldata = new FormData();
        Hoteldata.append('HotelName',hotel.HotelName)
        Hoteldata.append('Locality',hotel.Locality)
        Hoteldata.append('HotelType',hotel.HotelType)
        Hoteldata.append('HotelImg',HotelImg)

        api.addhotel(Hoteldata)
        .then((res)=>{
           setSuccess(res.data)
        } ).catch((err)=>{
            err.json(err)
        });
    }
    
    useEffect(()=>{
        api.hotels()
        .then(res=>setData(res.data))
    },[])
  
    return(
        <div className='home'>
            <div className='text'> 
                <form className='Hotel' enctype='multipart/form-data' onSubmit={handleSubmit}>
                   <h3 id='head' className="text-center">Hoteldata</h3>
                   {success && <h4 className="text-success">{success}</h4>}
                   <label id='labels'>Name</label>
                   <input type= ' text' className='txtbox' placeholder='Hotel Name' name='HotelName'  onChange={changeHandler}  /> 
                   <label  id='labels'>Locality</label>
                   <input type= 'text'  className='txtbox' placeholder='address' name='Locality' onChange={changeHandler}   />
                   <label  id='labels'>HotelType</label>
                   <input type= 'text'  className='txtbox' placeholder='SouthIndian or  NorthIndian' name='HotelType' onChange={changeHandler}  />
                   <label>Hotel Image</label>
                    <input type='file' className='txtbox'  name='HotelImg'  onChange={event=>{const file=event.target.files[0]; setHotelImg(file)}} />
                  <button id='button'>Register</button>
                </form>
            </div>
            <div className= 'container mt-5' >
                <div className='card'>
                    {data.map((hotel)=><div className='row'  key={hotel._id}>
                        <div className='col-lg-4' >
                           <img src={`../uploads/${hotel.HotelImg}`} className='img-fluid' alt={hotel.HotelImg} style={{width:600, height:180}}/> 
                        </div>
                        <div className='col-lg-8 px-5' >
                           <h2>{hotel.HotelName} </h2>
                           <h6>{hotel.Locality}</h6>
                           <p>{hotel.HotelType}</p>
                           <button className='btn btn-primary ' >Update</button>
                           <button className='btn btn-primary m-2' >Delete</button><br/><br/><br/><br/>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>   
    )
}
export default AddHotel
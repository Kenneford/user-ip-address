// import React from 'react'
// import { useEffect, useState } from 'react'
// import { MyMap } from './MyMap';
// import ShowIP from './ShowIP';

// export default function FetchData() {
//     const [data, setData] = useState(false)
//     const [errMessage, setErrMessage] = useState("Data not responding😒")

//     const ipData = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_API_KEY}`
// // 
// //     
//     useEffect(()=>{
//         const userIP = async () =>{
//             try{
//                 const response = await fetch(ipData)
//                 const userIPData = await response.json()
//                 console.log(userIPData)
//                 setData(userIPData)
//             } catch (err){
//                 console.log(err)
//                 setErrMessage(err.message)
//             }
//         }
//         userIP()
//     }, [])
//     if(!data){
//         return <div>Loading...</div>
//     }
//   return (
//     <div>
//         <div>{data.ip}</div>
//         <MyMap lat={data.location.lat} lng={data.location.lng}/>
//         <ShowIP data={data}/>
//     </div>
//   )
// }

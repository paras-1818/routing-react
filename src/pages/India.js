import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import MainStore from '../MainStore'
import { useEffect } from 'react';


function India() {
  const [firstIndiaData,setFirstIndiaData]=useState();
  const [secIndiaData,setSecIndiaData]=useState();
  const [thirdIndiaData,setThirdIndiaData]=useState();
  const [fourIndiaData,setFourIndiaData]=useState();


 
  const url=`https://newsdata.io/api/1/news?apikey=pub_7645667ee444c856cb3b5b500514aa3cfe63&category=top&country=in&page=0`
  const url2=`https://newsdata.io/api/1/news?apikey=pub_7645667ee444c856cb3b5b500514aa3cfe63&category=top&country=in&page=1`
  const url3=`https://newsdata.io/api/1/news?apikey=pub_7645667ee444c856cb3b5b500514aa3cfe63&category=top&country=in&page=2`
  const url4=`https://newsdata.io/api/1/news?apikey=pub_7645667ee444c856cb3b5b500514aa3cfe63&category=top&country=in&page=3`

  const apiData=()=>{
    axios.get(url2).then((response)=>{
          
           setFirstIndiaData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }

  const apiData2=()=>{
    axios.get(url).then((response)=>{
          
           setSecIndiaData(response.data.results);
           
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }

  const apiData3=()=>{
    axios.get(url).then((response)=>{
          
      setThirdIndiaData(response.data.results);
           
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }

  const apiData4=()=>{
    axios.get(url).then((response)=>{
          
      setFourIndiaData(response.data.results);
           
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }



  
  
   useEffect(()=>{
    apiData();
    apiData2();
    apiData3();
    apiData4();
  
   },[])
  return (
    <>
         <MainStore data={firstIndiaData} s_data={secIndiaData} t_data={thirdIndiaData}  f_data={fourIndiaData}></MainStore>
    </>
  )
}

export default India
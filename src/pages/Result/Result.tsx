import React,{useEffect} from 'react'
import { useAppSelector } from '../../features/store'



const Result = () => {
  const {response, answers} =  useAppSelector(state => state.quiz);
  
  const getResult = () => {

  } 
   useEffect(()=>{
    console.log(response, answers)
   },[])
  return (
    <div>Result : {}</div>
  )
}

export default Result
import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from './Product'
import { useMemo } from 'react'
import Banner from '../components/home/Banner'
import Company from '../components/home/Company'
import Content from '../components/home/Content'
import Different from '../components/home/Different'
import Management from '../components/home/Management'



// const Test = () =>{
//   return console.log("계속 실행됨")
// }

function Main() {
  // const result = useMemo(()=>{
  //   return Test()
  // }, [])

  // useEffect(()=>{
  //   console.log("완료")

  //   return ()=>{
  //     console.log("완료가 되기전 실행됨")
  //   }
  // }, [])

  



  // let [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Company />
      <Content />
      <Different />
      <Management />
      {/* {result}
      <p>{count}</p>
      <Product />
      <button onClick={()=>{setCount(count+1)}}>버튼</button> */}
    </>
  )
}

export default Main
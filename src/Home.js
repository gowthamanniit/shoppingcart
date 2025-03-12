import React from 'react'
import ItemCard from './ItemCard'
import data from './data'

export const Home = () => {
  return (
    <>
    {
    data.productData.map((item,index)=>{
      return(        
        <div style={{display:"inline-block"}}>
        <ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}></ItemCard>        
        </div>
     )    
    })    
  }


    </>
  )
}

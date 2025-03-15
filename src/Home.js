import React from 'react'
import ItemCard from './ItemCard'
import data from './data'

export const Home = () => {
  return (
    <>
    <h1 className='text-center mt-3'>SHOPING CART</h1>

    <h2 className='text-center bg-info mt-3'>Created by: GOWTHAMAN.K (KALVI INSTITUTE KARUR) 9894083890</h2>

    <section className='py-4 container'>
    <div className='row justify-content-center'>
    {
    data.productData.map((item,index)=>{
      return(        
        
        <ItemCard 
        img={item.img} 
        title={item.title} 
        desc={item.desc} 
        price={item.price} 
        item={item} 
        key={index} 
        />
        
     )    
    })    
  }

    </div>
    </section>
    


    </>
  )
}

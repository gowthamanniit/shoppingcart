import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const show=()=>{
    console.log(`http://localhost:3005?amount=${cartTotal}`)
    window.location.href=`http://localhost:3005?amount=${cartTotal}`
  }

const { isEmpty,
        totalUniqueItems,        
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
      if (isEmpty) return <h1 className='text-center'>your cart is empty</h1>
return(
  <section className='py-4 container'>
    <div className='row justify-content-center'>
        <div className='col-12 '>
          <h5>Cart:({totalUniqueItems}) Total Items:({totalItems})</h5>
          {/* <button className='btn btn-danger' onClick={()=>emptyCart(this)}>empty cart</button> */}
          <table className='table table-light table-hover m-0'>
            <tbody>
            {
              items.map((item,index)=>{
                return(
                <tr key={index}>
                  <td><img src={item.img} style={{height:"6rem"}} alt=""></img></td>
                  <td>{item.title}</td>
                  <td> ₹ {item.price}</td>
                  <td>qty:{item.quantity}</td>
                  <td>
                  <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                  <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                  <button className='btn btn-danger ms-2'onClick={()=>removeItem(item.id)}>Remove Item</button>
                  
                  </td>
                </tr>)
              })
            }
            </tbody>
          </table>          
        </div>
        <div className='col-auto ms-auto'>
            <h2>Total Price :$ {cartTotal}</h2>
        </div>
        <div className='col-auto'>
            <button className='btn btn-danger' onClick={()=>emptyCart()}>Clear Cart</button>
            <button className='btn btn-primary ms-2'
            onClick={show}>
              Buy Now</button>
        </div>
        
    </div>
  </section>
)
}
export default Cart
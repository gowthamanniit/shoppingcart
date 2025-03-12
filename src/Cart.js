import React from 'react'
import { useCart } from 'react-use-cart'
const Cart = () => {
const {isEmpty,totalUniqueItems,items,totalItems}=useCart()
if (isEmpty) return <h1>Your Cart is emptyCart</h1>
}
export default Cart
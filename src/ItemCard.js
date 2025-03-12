import { useCart } from "react-use-cart"
function ItemCard(props)
{
    const {addItem} =useCart()
    return(
            <>                
            
   <div class="card" style={{width:"18rem"}}>
  <img src={props.img} class="card-img-top" alt="img not found"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <button class="btn btn-outline-primary" onClick={addItem(props.item)}>add to card</button>    
  </div>
    </div>
    

            </>
    )
}
export default ItemCard
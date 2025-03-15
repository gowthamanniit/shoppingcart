import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from 'react-use-cart'
import { Home } from './Home'
import Cart from './Cart'

function App()
{
  return(
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  )
}
export default App
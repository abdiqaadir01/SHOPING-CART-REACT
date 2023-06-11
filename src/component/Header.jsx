import { Link } from 'react-router-dom'
import '../style.css'
import useShop from '../ShopContext';
const Header=()=>{
   const{products}= useShop();
    return (
    <div className="menu">
        <Link to="/" className='logo'>ReactRefy</Link>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/cart">cart</Link>
        
        </div>
        <Link to="/cart" className='cart'><span>{products.length}</span></Link>
     
       </div>
    )
    
}
export default Header
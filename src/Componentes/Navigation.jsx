import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { PizzaContext } from '../Context/PizzaContext'

const Navigation = () => {
  const {total} = useContext(PizzaContext);
  const navigate = useNavigate();
  const setActiveClass = ({ isActive }) => (isActive ? "active" : 'link-carrito');
  return (
    <>
    <nav className="bg-success d-flex justify-content-between align-items-center p-3">
      <span className="text-white" onClick={() => navigate('/')}>🍕 Pizzería Mamma Mia!</span>
      <div className="text-white">
        <NavLink className={ `btn ${setActiveClass} link-carrito`} to='/carrito'>🛒</NavLink>
        <span className='text-sm px-1'>$  {total.toLocaleString()}</span>
      </div>

    </nav>
      
    </>
  )
}

export default Navigation

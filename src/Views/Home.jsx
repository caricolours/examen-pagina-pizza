import banner from '../assets/banner.jpg'
import { useContext } from 'react'
import { PizzaContext } from '../Context/PizzaContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const { pizzas, allToCarrito } = useContext(PizzaContext);
    const navigate = useNavigate();

    const goToPizza = (name) => {
        navigate(`pizza/${name}`);
    };


    return (
        <>

            <ToastContainer position="bottom-right"/>
            <div className=''>
                <div className='d-flex-column justify-content-center' id='banner'>
                    <h1 className='d-flex justify-content-center'>¡Pizzería Mamma Mia!</h1>
                    <h4 className=' d-flex justify-content-center'>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
                </div>
                <div style={{ width: '100%', height: 200 }}>
                    <img style={{ width: '100%', height: 200, objectFit: 'cover' }} src={banner} alt="" />
                </div>
            </div>

            <div className="pizzaCard container">
                {pizzas.map((pizza) => (
                    <div className='tarjeta m-4 shadow border border-secondary-subtle' key={pizza.id}>
                        <img src={pizza.img} alt={pizza.name} width={200} />
                        <h4 className='text-capitalize text-center pt-3'>{pizza.name}</h4>
                        <div className='d-flex-column justify-content-center pt-3 border-top border-bottom'>
                            <span className='p-3 fw-bold'>Ingredientes:</span>
                            <ul className='text-sm mt-2'>
                                {pizza.ingredients.map((item) => (
                                    <li className='text-capitalize'>🍕 {item}</li>))}
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-center pt-2 pb-2'>$ {pizza.price.toLocaleString()}</h5>
                            <div className='text-center pb-2'>
                                <button type="button" className="btn btn-sm btn-warning m-1" onClick={() => goToPizza(pizza.name)}>Ver más 👀</button>
                                <button type="button" className='btn btn-sm btn-success' onClick={() => allToCarrito(pizza)}>+Añadir 🛒</button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Home

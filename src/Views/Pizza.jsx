import { useContext } from 'react'
import { PizzaContext } from '../Context/PizzaContext'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const Pizza = () => {
    const { pizzas, allToCarrito } = useContext(PizzaContext);
    const navigate = useNavigate();
    const { name } = useParams();


    return (
        <div className="container">
            <ToastContainer position="bottom-right"/>

            {pizzas.filter(pizza => pizza.name === name).map((pizza) => (

                <article key={pizza.name} className='d-flex justify-content-center align-items-center shadow border border-secondary-subtle m-5'>
                    <img className='rounded-circle mx-3' src={pizza.img} alt={pizza.name} height={200} width={200} style={{ objectFit: 'cover' }} />
                    <div>
                        <h4 className='text-capitalize px-3 py-2'>{pizza.name}</h4>
                        <p className='parrafo px-3'>{pizza.desc}</p>
                        <div className='d-flex-column justify-content-center pt-3 border-top border-bottom'>
                            <span className='px-3 py-2 fw-bold'>Ingredientes:</span>
                            <ul className='text-sm mt-2'>
                                {pizza.ingredients.map((item) => (
                                    <li className='text-capitalize'>🍕 {item}</li>))}
                            </ul>
                        </div>
                        <div className='d-flex justify-content-between px-3 py-2'>
                            <h5 className='text-center pt-2 pb-2'>Precio: $ {pizza.price}</h5>
                            <div>
                                <button type="button" className='btn btn-sm btn-outline-warning ' onClick={() => navigate('/')}>Volver</button>
                                <button type="button" className='btn btn-success mx-2' onClick={() => allToCarrito(pizza)}>+Añadir 🛒</button>
                            </div>
                        </div>
                    </div>

                </article>
            ))}
        </div>

    )
}

export default Pizza

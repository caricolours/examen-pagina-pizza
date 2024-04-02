import { useContext } from 'react'
import { PizzaContext } from '../Context/PizzaContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Carrito = () => {
    const {allPizzas, countProducts, total, removeToCarrito, allToCarrito } = useContext(PizzaContext);
    const navigate = useNavigate()
    
    const goToPagar = () => {
        Swal.fire({
            title: "Pagado!",
            text: "La boleta llegará a tu correo!",
            icon: "success"
          });
        };

    return (
        <div className="container">

            <div className='pizza-carrito'>
                <h3 className='m-3'>Detalle de tu pedido:</h3>
                <div className='bg-light c-carrito shadow'>
                    {allPizzas.map((pizza) => (


                        <div key={pizza.name} className='info-carrito d-flex justify-content-between align-items-center border-bottom border-secondary-subtle'>
                            <div className='m-1'>
                                <img className='rounded-circle' src={pizza.img} alt={pizza.name} height={40} width={40} style={{ objectFit: 'cover' }} />
                                <span className='text-capitalize text-sm px-2'>{pizza.name}</span>
                            </div>
                            <div className='m-1'>
                                <span className='fw-bold'>$ {(pizza.price * pizza.cantidad).toLocaleString()}</span>
                                <button type="button" className='btn btn-danger m-2' onClick={() => removeToCarrito(pizza)}>-</button>
                                <span className='fw-bold'>{pizza.cantidad}</span>
                                <button type="button" width={50} className='btn btn-warning m-2' onClick={() => allToCarrito(pizza)}>+</button>
                               
                            </div>
                        </div>

                    ))}
                </div>
                <div className='text-center'>
                <h4 className='text-center m-3'>Total: $ {total.toLocaleString()}</h4> <span className='text-center'>Catidad: {countProducts}</span>
                </div>
                <div>
                <button type="button" className='btn btn-sm btn-outline-primary m-2' onClick={() => navigate('/')}>Ver otra Pizza</button>
                <button type="button" className='btn btn-lg btn-success m-2' onClick={() => goToPagar()}>Pagar</button>
                </div>
            </div>

        </div>
    )
}

export default Carrito

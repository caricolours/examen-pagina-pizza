import notFound from '../assets/logopizza.png'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='container notFound d-flex-column shadow border border-5 border-succes-subtle rounded mx-10 my-5'>
            <div className='d-flex justify-content-center'>
                <h1 className='text-danger textoNotFound fw-bold'>4</h1>
                <img className='mt-5' src={notFound} alt="" style={{ width: 150, height: 150 }} />
                <h1 className='text-danger textoNotFound fw-bold'>4</h1>
            </div>
            <div className='d-flex-column text-center'>
                <h1 className='text-warning fw-bold'>ERROR</h1>
                <h2 className='text-danger'> Page Not Found</h2>
                <button type="button" className='btn btn-outline-success mt-3' onClick={() => navigate('/')}>
                    Volver
                </button>
            </div>
        </div>
    )
}

export default NotFound

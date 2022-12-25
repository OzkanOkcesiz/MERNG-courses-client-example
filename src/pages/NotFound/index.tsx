
import {FaExclamationTriangle} from 'react-icons/fa/'
import { Link } from 'react-router-dom' 

const NotFaund = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <FaExclamationTriangle className='text-danger' size={'5em'} />
        <h1>404</h1>
        <p className='lead'>Aradığınız sayfa bulunamadı</p>
        <Link to={'/'} className='btn btn-brimary' > Anasayfaya dön </Link>
    </div>
  )
}

export default NotFaund

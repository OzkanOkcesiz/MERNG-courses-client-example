import { decodeToken } from 'react-jwt'
import { useState } from 'react'
import { useQuery } from "@apollo/client";
import { GET_YETKILI } from "../../queries/yetkiliQueries";
import { Link } from 'react-router-dom';

const Header = () => {

  const [giris, setGiris] = useState(false);

  const token: any = localStorage.getItem('token');

  const yetkiliId: any = decodeToken(token);

  let id: any;

  if (yetkiliId !== null) {
    id = yetkiliId.id
  }

  useQuery(GET_YETKILI, {
    variables: { id },
    onCompleted: data => {
      setGiris(!!data.yetkili)
    },
  })

  const handleExit = () => {
    setGiris(false);
    localStorage.removeItem('token');
  }


  return (
    <div>
      <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div className="d-flex">
              <img src="assets/logo.png" alt="logo" className="mr-2" />
              <div>AOS Eğitim</div>
            </div>
          </a>
          {!giris &&
            <div className="d-flex">
              <Link className="navbar-brand" to="/signup">
                <div>Üye Ol</div>
              </Link>
              <Link className="navbar-brand" to="/login">
                <div>Giriş</div>
              </Link>
            </div>
          }
          {
            giris &&
            <div className="d-flex">
              <Link to="/" className="navbar-brand" onClick={handleExit}>
                <div>Çıkış</div>
              </Link>
            </div>
          }
        </div>
      </nav>
    </div>
  )
}

export default Header

import { useState } from 'react'
import { user, pass, tel, mail, bgimage } from '../helpers/imgs.jsx'

export function SignUp() {


  const [ userData, setUserData ] = useState({
    nombre : '',
    apellido : '',
    email : '',
    telefono : '',
    password : ''
  });

  const { nombre, apellido, email, telefono, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
    ...userData,
    [ name ] : value
    })
  }

  return (
    <div className='bg-img' style={{
        backgroundImage: `url(${bgimage})`,
        height: '100vh',
      }}>
        <h1 className='h1'>BeautySalon</h1>
  
        <main className='container login signup'>
          <form className='form-login'>

            <div>
              <label htmlFor="nombre">
                <img src={user} alt="" />
              </label>
              <input
                type="text"
                id='nombre'
                placeholder='Nombres'
                name='nombre'
                value={nombre}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="apellido">
                <img src={user} alt="" />
              </label>
              <input
                type="text"
                id='apellido'
                placeholder='Apellidos'
                name='apellido'
                value={apellido}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">
                <img src={mail} alt="" />
              </label>
              <input
                type="text"
                id='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="tel">
                <img src={tel} alt="" style={{width: '2.8rem', marginLeft: '2.4rem'}}/>
              </label>
              <input
                type="tel"
                id='tel'
                placeholder='Telefono'
                name='telefono'
                value={telefono}
                onChange={handleChange}
                style={{
                  marginLeft: '.9rem'
                }}
              />
            </div>
  
            <div>
              <label htmlFor="password">
                <img src={pass} alt="" />
              </label>
              <input
                type="text"
                id='password'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </div>
  
            <input type="submit" value='Entrar'/>
  
          </form>
        </main>
  
        <footer className='login-footer'>
        <div>
          <a href="/login">¿Ya Tienes Una Cuenta? Inicia Sesion</a>
        </div>

          &#169; 2023 Key. All Rights Reserved | Done by Ferney Baron
        </footer>
      </div>
  )
}

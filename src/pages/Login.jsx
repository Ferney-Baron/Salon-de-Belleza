import { user, pass, bgimage } from '../helpers/imgs.jsx'
import { useState } from 'react';

export function Login() {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  };

  const { email, password } = userData;

  const validUser = async (e) => {
    e.preventDefault();
    let datos = new FormData();

    Object.keys(userData).forEach((clave) => {
      datos.append(clave, userData[clave]);
    });

    try {
      const url = `http://localhost:4000/api/login`;
      const req = await fetch(url, {
        method: 'POST',
        body: datos
      });

      const res = await req.json();
      console.log(res);


    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className='bg-img' style={{
      backgroundImage: `url(${bgimage})`,
      height: '100vh',
    }}>
      <h1 className='h1'>BeautySalon</h1>

      <main className='container login'>
        <form className='form-login' onSubmit={validUser}>
          <div>
            <label htmlFor="email">
              <img src={user} alt='gmail' />
            </label>
            <input
              type="email"
              id='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              value={email}
              minLength='10'
              required
            />
          </div>

          <div>
            <label htmlFor="password">
              <img src={pass} alt='password' />
            </label>
            <input
              type="password"
              id='password'
              placeholder='Contraseña'
              name='password'
              value={password}
              onChange={handleChange}
              minLength='7'
              required
            />
          </div>

          <input type="submit" value='Entrar' />

        </form>
      </main>

      <footer className='login-footer'>
        <div>
          <a href="/signup">¿No Tienes Cuenta? Crea Una</a>
        </div>

        &#169; 2023 Key. All Rights Reserved | Done by Ferney Baron
      </footer>
    </div>
  )
}

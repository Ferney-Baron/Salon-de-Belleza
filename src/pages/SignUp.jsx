import { useState } from 'react'
import { user, pass, tel, mail, bgimage } from '../helpers/imgs.jsx'
import { ScaleLoader } from 'react-spinners';
// import bcrypt from 'bcrypt'

export function SignUp() {

  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const bgBarLoader = (isLoading) ? 'sweet-loading bg-BarLoader' : '';

  const { nombre, apellido, email, telefono, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const register = async (e) => {
    e.preventDefault();

    // bcrypt.genSalt(10, function (err, salt) {
    //   bcrypt.hash(password, salt, function (err, hash) {
    //     console.log(hash);
    //   });
    // });

    let data = new FormData();

    Object.keys(userData).forEach(key => {
      data.append(key, userData[key]);
    })

    try {
      setIsLoading(!isLoading);
      const req = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        body: data
      });
      const res = await req.json();

      if (req.ok) {
        setIsLoading(false);
      }

      console.log(res);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <div className='bg-img'
      style={{
        backgroundImage: `url(${bgimage})`,
        height: '100%',
        minHeight: '100vh'
      }}>


      <div className={bgBarLoader}>
        <ScaleLoader
          color={'#36d7b7'}
          loading={isLoading}
          size={1}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>


      <h1 className='h1'>BeautySalon</h1>

      <main className='container login signup'>
        <form className='form-login' onSubmit={register}>

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
              minLength='3'
              required
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
              minLength='3'
              required
            />
          </div>

          <div>
            <label htmlFor="email">
              <img src={mail} alt="" />
            </label>
            <input
              type="email"
              id='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChange}
              minLength='10'
              required
            />
          </div>

          <div>
            <label htmlFor="tel">
              <img src={tel} alt="" style={{ width: '2.8rem', marginLeft: '2.4rem' }} />
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
              minLength='6'
              maxLength='10'
              required
            />
          </div>

          <div>
            <label htmlFor="password">
              <img src={pass} alt="" />
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
          <a href="/login">¿Ya Tienes Una Cuenta? Inicia Sesion</a>
        </div>

        &#169; 2023 Key. All Rights Reserved | Done by Ferney Baron
      </footer>
    </div>
  )
}

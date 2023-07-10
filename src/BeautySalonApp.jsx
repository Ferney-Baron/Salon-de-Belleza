import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Specialists } from "./components/Specialist"
import { descripcionImg } from "./helpers/imgs"
import especialistasJson from "./helpers/especialistas"

export function BeautySalonApp() {

  const [especialistas, setEspecialistas] = useState([]);


  useEffect(() => {

    const traerEspecialistas = async () => {
      try {
        const url = await fetch('http://localhost:4000/api/especialista');
        const res = await url.json();
        setEspecialistas(res);

      } catch (error) {
        setEspecialistas(especialistasJson);
      }
    };

    traerEspecialistas();
  }, [])


  return (
    <>
      <Header />

      <section className="descripcion">
        <div className="container descripcion-container">
          <div className="descripcion-texto">
            <h4>We Provide</h4>
            <h3>Welcome to Spa Center</h3>
            <p>
              Spread over two floors, our beautiful spa offer a soothing environment in which you can rest, relax and feel competely rejuvenated.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged
            </p>
          </div>

          <div className="descripcion-img">
            <img src={descripcionImg} alt="descripcion-img" />
          </div>

        </div>
      </section>

      <section className="especialistas" style={{ backgroundColor: '#F3F0EB' }}>

        <h3 className="especialistas-subt">Our Experience Specialists</h3>
        <p className="especialistas-summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt, reprehenderit ea harum delectus quo id qui minus accusamus assumenda natus officia similique vero deserunt excepturi neque quasi facere ipsum.</p>

        <div className="especialistas-box">
          {
            especialistas.map(({ nombre, especialidad, id, foto }) => (
              <Specialists name={nombre} specialists={especialidad} key={id} img={foto} />
            ))
          }
        </div>

      </section>

    </>
  )
}
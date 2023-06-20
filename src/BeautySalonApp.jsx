import { Header } from "./components/Header"
import { descripcionImg } from "./helpers/imgs"

export function BeautySalonApp() {
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

    </>
  )
}
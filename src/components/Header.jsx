import { headerImg } from "../helpers/imgs"

export function Header() {
    return (
        <>
            <header className="header">
                <div className="header-info d-flex align-items-center gap-5 border ps-5" style={{ height: '3rem' }}>
                    <p className="border-end pe-5"><i className="fa-solid fa-envelope"></i> info@beautysalon.com</p>
                    <p><i className="fa-solid fa-phone"></i> +57 333 3333333</p>
                </div>

                <nav className="navbar navbar-expand-lg header-nav px-5 py-lg-4 py-xs-3">
                    <div className="container-fluid p-0">
                        <a className="navbar-brand nav-title" href="#">Beauty <span>Salon</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5"> {/* Aquí se agrega la clase ms-auto */}
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Tratamientos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Spa Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Eventos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sobre Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="header-img-container">
                    <img src={headerImg} alt="img" className="img-fluid"/>
                    <h2>Laser Skin Resurfacing</h2>
                </div>

            </header>
        </>
    )
}
import React from 'react'

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <span>Mejor valorados</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/images/sprite.svg#icon-power"></use>
                        </svg>
                        <span>Comida Rápida</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/images/sprite.svg#icon-location"></use>
                        </svg>
                        <span>Lo más cercano</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="/images/sprite.svg#icon-heart"></use>
                        </svg>
                        <span>Tus favoritos</span>
                    </a>
                </li>
            </ul>
            <div className="legal">&copy; 2021 por Jardin Binario. Todos los derechos reservados.</div>
        </nav>
    )
}

import React from 'react'
// import Image from 'next/image'
import { signOut, useSession } from 'next-auth/client'

export const Header = () => {

    const [session, loading] = useSession()

    return (
            <header className="header">
                {/* <Image className="logo" src="/images/logo.png" height={30} width={40} /> */}
                <form action="#" className="search">
                    <input placeholder="Busca tus restaurantes favoritos..." className="search__input" type="text"/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref="/images/sprite.svg#icon-search"></use>
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="/images/sprite.svg#icon-bookmarks"></use>
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>
                    <div className="user-nav__user">
                        <img className="user-nav__user-photo" onClick={signOut} src={session?.user.image} />
                        <span className="user-nav__user-name">{session?.user.name}</span>
                    </div>
                </nav>
            </header>
    )
}

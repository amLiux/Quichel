import React from 'react'
import { Header } from './Header'
import { Map } from './Map'
import { Sidebar } from './Sidebar'




export const MainPage = () => {
    return (
        <div className="container">
            <Header/>
            <div className="content">
                <Sidebar/>
                <main suppressHydrationWarning={true} className="hotel-view">
                    <Map/>
                </main>
            </div>
        </div>
    )
}

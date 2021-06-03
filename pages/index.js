import Head from 'next/head'
import { getSession } from 'next-auth/client'

import { Login } from '../components/Login'
import { MainPage } from '../components/MainPage'


export default function Home({ session }) {

	return !session 
		? <Login /> 
		:
		(
			<>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<title>quichel</title>
					<link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
					<link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
				</Head>
				<MainPage/>
			</>
		)
	
}


export async function getServerSideProps(context) {
	const session = await getSession(context)
	return {
		props: {
			session
		}
	}
}
import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './navbar/Nav'
import Footer from './footer/Footer'

type Props = {
	children?: ReactNode
	title?: string
}

const Layout = ({ children, title = 'Pricetrack' }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>
		<header></header>
		<Navbar />
		{children}
		<Footer />
	</div>
)

export default Layout

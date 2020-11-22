import React, { useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import useSWR, { responseInterface } from 'swr'
import Container from '@material-ui/core/Container'
import Layout from '../../components/Layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import ProductHeader from '../../components/productHeader/ProductHeader'
import PriceTemplate from '../../components/productsTemplate/PriceTemplate'
import Grid from '@material-ui/core/Grid'
import { Filter } from '../../components/filter/Filter'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Product, DataProps, IData } from '../../interfaces'
import { useRouter } from 'next/router'
import PriceSkeleton from '../../components/skeleton/PriceSkeleton'
import isEmpty from '../../utils/isObject'
import { Typography } from '@material-ui/core'
import axios from 'axios'
import ChartHeader from '../../components/chart/Chart'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: '100vh',
			justifyContent: 'center',
			alignItems: 'center',
		},
		box: {
			margin: 'auto',
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		grid: {
			padding: theme.spacing(3),
			height: '100%',
		},
		title: {
			marginBottom: theme.spacing(3),
		},
		tabs: {
			position: 'relative',
			width: 'auto',
			margin: 'auto',
		},
	})
)
const fetcher = (url: string) => axios(url).then(r => r.data)

export default function ProductPage() {
	const [isLoading, setLoading] = useState(true)
	// const url = process.env.BACKEND_URL!
	const url = 'http://localhost:5000/productdetails'
	const { data, error }: responseInterface<IData, any> = useSWR(url, fetcher)
	const classes = useStyles()

	// if (!data) return <div>loading...</div>
	useEffect(() => {
		if (data) {
			setLoading(false)
		} else if (error) {
			setLoading(false)
		} else {
			setLoading(true)
		}
	}, [data, error])

	if (error) {
		return (
			<Container>
				<Typography>
					Oops! something Happened please reload the browser
				</Typography>
			</Container>
		)
	}
	return (
		<Container maxWidth='xl' className={classes.root}>
			<Layout>
				<Box component='div' className={classes.box}>
					<ChartHeader isLoading={isLoading} data={data} />
					{/* <ProductHeader isLoading={isLoading} data={data} /> */}
				</Box>
				<Container maxWidth='lg'>
					<Box width='100%'>
						<Filter />
					</Box>
					<Box mb={5}>
						<Grid
							container
							spacing={1}
							justify={'center'}
							alignItems={'stretch'}
						>
							{isLoading
								? Array(8)
										.fill('')
										.map((_, i) => {
											return (
												<Grid key={i} item xs={6} sm={4} md={3}>
													<PriceSkeleton />
												</Grid>
											)
										})
								: data?.items?.map(item => {
										return (
											<Grid key={item.id} item xs>
												<PriceTemplate product={item} />
											</Grid>
										)
								  })}
						</Grid>
					</Box>
				</Container>
			</Layout>
		</Container>
	)
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	// get ids of product from the database.
// 	const res = await fetch(
// 		'http://localhost:5000/products?name=infinix%20note%208'
// 	)
// 	const data: IData[] = await res.json()
// 	const productIds = data?.map(product => {
// 		return { params: { slug: product.id.toString() } }
// 	})

// 	return {
// 		fallback: true,
// 		paths: productIds,
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	// Todos
// 	//1. get query params from ctx and fetch dynamically
// 	// from the database or run cloud functions if its not present

// 	const res = await fetch(
// 		'http://localhost:5000/products?name=infinix%20note%208'
// 	)
// 	const data: IData[] = await res.json()
// 	const results = data[0]
// 	return { props: { params, res: results } }
// }
// // export const getServerSideProps: GetServerSideProps = async ({ query }) => {
// //    if (!query) console.log({ noquery: query })
// //    console.log({ query })
// //    const res = await fetch(
// //       'http://localhost:5000/products?name=infinix%20note%208'
// //    )
// //    const data: IData[] = await res.json()
// //    const results = data[0]
// //    return { props: { data: results } }
// // }

// // const { data, error } = useSWR('/api/user', fetcher)
// // const fetcher = url => fetch(url).then(r => r.json())
// // export async function getStaticProps() {
// //    // `getStaticProps` is invoked on the server-side,
// //    // so this `fetcher` function will be executed on the server-side.
// //    const posts = await fetcher('/api/posts')
// //    return { props: { posts } }
// //  }
// //  function Props (props) {
// //    // Here the `fetcher` function will be executed on the client-side.
// //    const { data } = useSWR('/api/posts', fetcher, { initialData: props.posts })
// //    // ...
// //  }

import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import {
	makeStyles,
	createStyles,
	Theme,
	withStyles,
} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import useChart from '../../hooks/useChart'
import { DataProps } from '../../interfaces'
// import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import { ShowTabs, ShowTabsSkeleton } from './props/showTabSkeleton'

// custom skeleton component  ***********************
const StyledSkeleton = withStyles({
	root: {
		borderRadius: 'none',
	},
})(Skeleton)

// custom styles ********************
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			// display: 'flex',
			// flexDirection: 'column',
			// alignItems: 'center',
			// justifyContent: 'center',
			padding: 20,
			paddingBottom: 15,
			marginTop: 20,
			marginBottom: 20,
			width: '100%',
			border: '2px solid',
			borderColor: theme.palette.grey[200],
			transition: 'all 5s ease',
		},
		root: {
			height: '100vh',
			justifyContent: 'center',
			alignItems: 'center',
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
		cardContainer: {
			position: 'relative',
			// height: '40vh',
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			width: '100%',
			border: '1px solid #ddd',
			boxShadow: 'none',
		},
		imgCard: {
			boxShadow: 'none',
		},
		chartArea: {
			position: 'relative',
			// height: '40vh',
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			width: '100%',
			border: '1px solid #ddd',
			boxShadow: 'none',
			// minHeight: 200,
		},
	})
)

// main function *****************************************
export default function ProductHeader({ data, isLoading }: DataProps) {
	const classes = useStyles()
	// refine data object to get PriceProps
	const PriceData = data?.items?.map(item => {
		return { store: item.websiteName, price: item.actualPrice.value }
	})
	const { chartData, chartOptions }: any = useChart(PriceData)
	const [tabIndex, setTabIndex] = useState(0)
	const [tabIndex2, setTabIndex2] = useState(0)

	return (
		<Paper
			// variant='outlined'
			elevation={0}
			className={classes.paper}
		>
			<Grid
				container
				className={classes.grid}
				spacing={2}
				justify='center'
				alignItems='center'
			>
				{/* first grid for search details */}
				<Grid item md={6}>
					<Paper
						elevation={0}
						style={{
							boxShadow: 'none',
						}}
					>
						<Typography variant='h3' component='h2' className={classes.title}>
							{isLoading ? <StyledSkeleton variant='text' /> : data?.name}
						</Typography>

						<Typography variant='body2' component='h4'>
							{!isLoading ? (
								data?.description
							) : (
								<>
									<StyledSkeleton variant='text' />
									<StyledSkeleton variant='text' />
									<StyledSkeleton variant='text' width='85%' />
									<StyledSkeleton variant='text' width='60%' />
								</>
							)}
						</Typography>
					</Paper>
				</Grid>

				{/* second grid for images, price alert, and graph */}

				<Grid item md={6}>
					{isLoading ? (
						<ShowTabsSkeleton options={{ tabIndex2, setTabIndex2, classes }} />
					) : (
						<ShowTabs
							options={{
								tabIndex,
								setTabIndex,
								classes,
								chartData,
								chartOptions,
								img: data?.img || '/img/1.jpg',
							}}
						/>
					)}
				</Grid>
			</Grid>
		</Paper>
	)
}

import React, { useState } from 'react'
import useChart from '../../hooks/useChart'
import Typography from '@material-ui/core/Typography'
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone'
import {
	makeStyles,
	createStyles,
	Theme,
	withStyles,
} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { DataProps } from '../../interfaces'
import { Line } from 'react-chartjs-2'
import { IconButton } from '@material-ui/core'
import InfoDrawer from '../productHeader/Drawer'
// import Box from '@material-ui/core/Box'
// 3db83a
// custom styles ********************
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: '40vh',
			width: '100%',
			boxShadow: '0 20px 30px -19px rgba(160, 44, 219, 0.58)',
			borderRadius: '15px',
			background:
				'url(/img/left-circles.svg) no-repeat left bottom, linear-gradient(90deg, #BA81FF 0%, #FF6A95 99%)',
			// backgroundColor: '#00004A',
			// backgroundImage: 'linear-gradient(to right, #00dbde 0%, #fc00ff 100%)',
			// backgroundImage: 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
			margin: '20px 0 0',
			position: 'relative',
			padding: '30px',
			color: ' #ffffff',
			// display: 'flex',
			// alignItems: 'center',
			// justifyContent: 'center',
			'&::after': {
				position: 'absolute',
				height: '230px',
				width: '305px',
				content: '',
				background: 'url(/img/right-circle.svg) no-repeat right top 80px',
				right: 0,
				bottom: 0,
				pointerEvents: 'none',
			},
		},
		icon: {
			border: '1px solid rgba(255, 255, 255, 0.3)',
			fontSize: 8,
			position: 'absolute',
			right: 10,
			top: 10,
		},
	})
)

// main function *****************************************
export default function ChartHeader({ data, isLoading }: DataProps) {
	const classes = useStyles()
	// refine data object to get PriceProps
	const PriceData = data?.items?.map(item => {
		return { store: item.websiteName, price: item.actualPrice.value }
	})
	const { chartData, chartOptions }: any = useChart(PriceData)
	// drawer State
	const [anchor, setAnchor] = useState(false)

	// toggle drawer
	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return
		}
		setAnchor(open)
	}

	return (
		<>
			<Paper elevation={0} className={classes.root}>
				<IconButton className={classes.icon} onClick={toggleDrawer(true)}>
					<WbIncandescentTwoToneIcon />
				</IconButton>
				<div style={{ width: '100%', height: '100%', marginTop: '20px' }}>
					{isLoading ? (
						'loading'
					) : (
						<Line
							// height={100}
							// width={500}
							data={chartData}
							options={chartOptions}
						/>
					)}
				</div>
			</Paper>
			<InfoDrawer toggleDrawer={toggleDrawer} anchor={anchor} data={data} />
		</>
	)
}

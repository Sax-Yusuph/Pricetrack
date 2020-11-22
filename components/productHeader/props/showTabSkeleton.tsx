import Paper from '@material-ui/core/Paper'
import NavTabs from '../../../components/navbar/Tabs'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
// import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import { Line } from 'react-chartjs-2'
import { withStyles } from '@material-ui/core/styles'

// function show Data grid
interface showTabsProps {
	options: {
		tabIndex: number
		setTabIndex: React.Dispatch<React.SetStateAction<number>>
		classes: any
		chartData: {}
		chartOptions: {}
		img: string
	}
}

interface showTabs2Props {
	options: {
		tabIndex2: number
		setTabIndex2: React.Dispatch<React.SetStateAction<number>>
		classes: any
	}
}

// custom skeleton component  ***********************
const StyledSkeleton = withStyles({
	root: {
		borderRadius: 'none',
	},
})(Skeleton)

export const ShowTabsSkeleton = ({ options }: showTabs2Props) => {
	const { tabIndex2, classes, setTabIndex2 } = options

	return (
		<>
			{tabIndex2 === 0 ? (
				<Paper elevation={0} className={classes.cardContainer}>
					<StyledSkeleton variant='rect' height={200} width='100%' />
				</Paper>
			) : tabIndex2 === 1 ? (
				<StyledSkeleton variant='rect' height={200} width='100%' />
			) : (
				<StyledSkeleton variant='rect' height={200} />
			)}

			{/* Tab control  buttons */}
			<div style={{ position: 'relative', marginTop: 40 }}>
				<div
					style={{
						position: 'absolute',
						bottom: '-15px',
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<NavTabs tabIndex={tabIndex2} setTabIndex={setTabIndex2} />
				</div>
			</div>
		</>
		// <Box minHeight={200} bgcolor='#F4F7FA' borderRadius={8} />
	)
}

export const ShowTabs = ({ options }: showTabsProps) => {
	const {
		tabIndex,
		setTabIndex,
		classes,
		chartData,
		chartOptions,
		img,
	} = options
	return (
		<>
			{tabIndex === 0 ? (
				<Paper elevation={0} className={classes.cardContainer}>
					<Card className={classes.imgCard}>
						<CardMedia
							component='img'
							alt='demo product'
							height='200'
							image={img}
							style={{ objectFit: 'contain' }}
						/>
					</Card>
				</Paper>
			) : tabIndex === 1 ? (
				<div>
					<Line
						// height={100}
						// width={500}
						data={chartData}
						options={chartOptions}
					/>
				</div>
			) : (
				<StyledSkeleton variant='rect' height={200} />
			)}

			{/* Tab control  buttons */}
			<div style={{ position: 'relative', marginTop: 40 }}>
				<div
					style={{
						position: 'absolute',
						bottom: '-15px',
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<NavTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
				</div>
			</div>
			{/* // <Box minHeight={200} bgcolor='#F4F7FA' borderRadius={8} /> */}
		</>
	)
}

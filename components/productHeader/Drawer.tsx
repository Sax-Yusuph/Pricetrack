import {
	Grid,
	Typography,
	Container,
	makeStyles,
	Theme,
	createStyles,
	Divider,
	Button,
	ButtonGroup,
	Avatar,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import Skeleton from '@material-ui/lab/Skeleton'
import { withStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered'
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient'

import { Rating } from '@material-ui/lab'
import { IData } from '../../interfaces'
import handleImageError from '../../utils/handleImgError'

interface DrawerProps {
	anchor: boolean
	toggleDrawer: (open: boolean) => any
	data?: IData
}

// custom skeleton component  ***********************
const StyledSkeleton = withStyles({
	root: {
		borderRadius: 'none',
	},
})(Skeleton)

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: '30px 20px',
			overflowX: 'hidden',
			// width: theme.breakpoints.down('sm') ? 'auto' : '30vw',
		},
		PriceBox: {
			border: '1px solid #eee',
			borderRadius: '8px',
			width: '100%',
		},
		statLabel: {
			fontSize: 'calc(0.8rem + 2%)',
			color: theme.palette.grey[500],
			fontWeight: 500,
			margin: 0,
		},
		statValue: {
			fontSize: 'calc(1.3rem + 5% )',
			fontWeight: 'bold',
			marginBottom: 4,
			letterSpacing: '1px',
		},
		priceStat: {
			backgroundColor: theme.palette.primary.main,
			'&:hover': {
				backgroundColor: theme.palette.primary.dark,
				color: theme.palette.common.white,
			},
		},
		alertBtn: {
			margin: '30px 5%',
		},
		imgBox: {
			// backgroundColor: theme.palette.divider,
			border: '1px solid #eee',
			borderRadius: 13,
			// minHeight: 200,
			objectFit: 'cover',
			overflow: 'hidden',
			padding: 0,
		},
		avatar: {
			borderRadius: 8,
			backgroundColor: theme.palette.primary.light,
			width: theme.spacing(3),
			height: theme.spacing(3),
			// fontSize: '0.8rem',
			marginRight: theme.spacing(1),
		},
		averageValue: {
			fontWeight: 'bold',
			marginBottom: 4,
			letterSpacing: '1px',
		},
	})
)

interface PriceConProps {
	label: string
	value?: {
		highestPrice: number
		lowestPrice: number
		averagePrice: number
	}
	borderedGridStyles: any
	classes: any
}

const PriceContainer = (props: PriceConProps) => {
	const { label, value, borderedGridStyles, classes } = props
	return (
		<Box
			p={1}
			flex={'auto'}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			className={borderedGridStyles.item}
		>
			<Typography
				gutterBottom
				variant={'caption'}
				className={classes.statLabel}
			>
				{label + ' '} price
			</Typography>
			<Typography component={'span'} variant='h5' className={classes.statValue}>
				₦{label === 'Highest' ? value?.lowestPrice : value?.highestPrice}
			</Typography>
			<Divider />
		</Box>
	)
}
export default function InfoDrawer({
	anchor,
	toggleDrawer,
	data,
}: DrawerProps) {
	const theme = useTheme()
	const classes = useStyles()
	const matches = useMediaQuery(theme.breakpoints.down('xs'))
	const borderedGridStyles = useGutterBorderedGridStyles({
		borderColor: 'rgba(0, 0, 0, 0.08)',
		height: '50%',
	})
	const styles = useGradientBtnStyles()
	const value = data?.rating?.stars.split(' ')[0]
	return (
		<Drawer
			anchor={matches ? 'bottom' : 'right'}
			open={anchor}
			onClose={toggleDrawer(false)}
		>
			<div
				style={{ width: matches ? 'auto' : ' 40vw' }}
				onClick={toggleDrawer(false)}
				onKeyDown={toggleDrawer(false)}
			>
				<Grid
					className={classes.root}
					container
					justify='center'
					alignItems={'stretch'}
					spacing={2}
				>
					<Grid item xs={5} sm={12}>
						{/* <StyledSkeleton variant='rect' height={200} /> */}
						<Box className={classes.imgBox}>
							<img
								src={data?.img}
								width='100%'
								height='100%'
								onError={handleImageError}
							/>
						</Box>
					</Grid>
					<Grid item xs={7} sm={12}>
						<Typography variant='body2' gutterBottom>
							{data?.name || 'loading'}
						</Typography>
						<Box
							mb={2}
							display='flex'
							justifyContent='space-between'
							alignItems='center'
						>
							<Rating
								size='small'
								name='readOnly'
								value={value ? +value : 0}
								readOnly
							/>
							<Typography className={classes.statLabel} gutterBottom>
								{data?.rating?.details || 'loading'}
							</Typography>
						</Box>
						<Typography className={classes.statLabel}>Average Price</Typography>
						<Box component='div' display='flex'>
							<Avatar className={classes.avatar}>₦</Avatar>
							<Typography
								component={'span'}
								variant='h5'
								className={classes.averageValue}
							>
								{data?.priceStats.averagePrice}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12}>
						{/* price container here*/}
						<Box display={'flex'} className={classes.PriceBox}>
							{['Lowest', 'Highest'].map((label, i) => (
								<PriceContainer
									key={i}
									label={label}
									value={data?.priceStats}
									borderedGridStyles={borderedGridStyles}
									classes={classes}
								/>
							))}
						</Box>
						{/* alert button */}
						<Button
							classes={styles}
							style={{ margin: '15px 0', width: '100%' }}
							variant={'contained'}
							color={'primary'}
						>
							Set Alert
						</Button>
					</Grid>
				</Grid>
			</div>
		</Drawer>
	)
}

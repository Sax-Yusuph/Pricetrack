import React from 'react'
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CallMade from '@material-ui/icons/CallMade'
import { Row, Column, Item } from '@mui-treasury/components/flex'
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized'
import { Product } from '../../interfaces'
import handleImageError from '../../utils/handleImgError'
import { Box } from '@material-ui/core'

const StyledTooltip = withStyles({
	tooltip: {
		marginTop: '0.2rem',
		backgroundColor: 'rgba(0,0,0,0.72)',
		color: '#fff',
	},
})(Tooltip)

const useBasicProfileStyles = makeStyles(({ palette }: Theme) => ({
	avatar: {
		borderRadius: 8,
		backgroundColor: palette.primary.light,
	},
	overline: {
		fontSize: 8,
		textTransform: 'uppercase',
		letterSpacing: 1,
		color: '#8D9CAD',
		lineClamp: 1,
		boxOrient: 'vertical',
		overflow: 'hidden',
		display: '-webkit-box',
		whiteSpace: 'pre-wrap',
		textOverflow: 'ellipsis',
	},
	name: {
		fontSize: '1.25rem',
		fontWeight: 'bold',
		color: '#495869',
	},
}))

interface DetailProps {
	details: {
		price: number
		shipping?: string
	}
}

const BasicProfile = ({ details }: DetailProps) => {
	const styles = useBasicProfileStyles()
	return (
		<Row>
			<Item>
				<Avatar className={styles.avatar}>$</Avatar>
			</Item>
			<Item position={'middle'} pl={{ sm: 0.5, lg: 0.5 }}>
				<Typography className={styles.overline}>{details.shipping}</Typography>
				<Typography className={styles.name}>{details.price}</Typography>
			</Item>
		</Row>
	)
}

const useCardHeaderStyles = makeStyles(() => ({
	root: { paddingBottom: 0 },
	title: {
		fontSize: '0.8rem',
		color: '#122740',
		lineClamp: 2,
		boxOrient: 'vertical',
		overflow: 'hidden',
		display: '-webkit-box',
		whiteSpace: 'pre-wrap',
		textOverflow: 'ellipsis',
	},
	subheader: {
		fontSize: '0.6rem',
		color: '#495869',
	},
}))
interface HeaderProps {
	title: {
		productName: string
		shipping?: string
	}
}
const CardHeader = ({ title }: HeaderProps) => {
	const styles = useCardHeaderStyles()
	const iconBtnStyles = useSizedIconButtonStyles({
		padding: 8,
		childSize: 20,
		color: '#4caf50',
	})
	return (
		<Row>
			<Item position={'middle'}>
				<Typography className={styles.title}>{title.productName}</Typography>
				<Typography className={styles.subheader}>{title.shipping}</Typography>
			</Item>
			<Item position={'right'} mr={-0.5}>
				<StyledTooltip title={'Check out'}>
					<IconButton classes={iconBtnStyles}>
						<CallMade />
					</IconButton>
				</StyledTooltip>
			</Item>
		</Row>
	)
}

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		border: '2px solid',
		borderColor: theme.palette.grey[200],
		borderRadius: 16,
		transition: '0.4s',
		'&:hover': {
			borderColor: theme.palette.primary.main,
		},
		height: '100%',
		width: 190,
	},
	prodImg: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		borderRadius: 8,
		// [theme.breakpoints.up('sm')]: {
		//    height: 150,
		// },
	},
	imgBox: {
		overflow: 'hidden',
	},
}))

interface PriceProps {
	product: Product
}

export const PriceTemplate = ({ product }: PriceProps) => {
	const styles = useStyles()
	const gap = { xs: 1, sm: 1.5, lg: 2 }
	return (
		<Column className={styles.card} p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap}>
			<Item>
				<Box
					className={styles.imgBox}
					height={150}
					bgcolor={'#F4F7FA'}
					borderRadius={8}
				>
					<img
						src={product.productImage}
						className={styles.prodImg}
						onError={handleImageError}
					/>
				</Box>
			</Item>
			<CardHeader
				title={{
					productName: product.productName,
					shipping: product.shipping,
				}}
			/>
			<BasicProfile
				details={{
					price: product.actualPrice.value,
					shipping: product.shipping,
				}}
			/>
		</Column>
	)
}
export default PriceTemplate

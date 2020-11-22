import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

interface Props {
	children: React.ReactElement
}

// hide navbar on scroll

function HideOnScroll({ children }: Props) {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

// set styling for navbar components.
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		appBar: {
			//  top: 'auto',
			//  bottom: 0,
			backgroundColor: theme.palette.common.white,
			// boxShadow: 'none',
			borderBottom: '1px solid #eee',
		},
		menuButton: {
			marginRight: theme.spacing(2),
			color: '#162334',
		},
		title: {
			flexGrow: 1,
			color: '#162334',
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		search: {
			position: 'relative',
			color: '##162334',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.black, 0.07),
			'&:hover': {
				backgroundColor: fade('#48bb78', 0.25),
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(1),
				width: 'auto',
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			color: '#fff',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	})
)

// Navbar

export default function Navbar() {
	const classes = useStyles()
	return (
		<>
			<HideOnScroll>
				<AppBar position='fixed' className={classes.appBar}>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='open drawer'
						>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title} variant='h6' noWrap>
							Pricetrack
						</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder='Search…'
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</>
	)
}

import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#3db83a',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fcfcff',
		},
	},
	typography: {
		// fontFamily: 'poppins',
	},
	shape: {
		// borderRadius: 20,/
	},
	spacing: 10,
	shadows: Array(25).fill('0 9px 25px 0 rgba(132, 128, 177, 0.28)'),
	overrides: {
		MuiAppBar: {
			root: {
				boxShadow: '0 9px 25px 0 rgba(132, 128, 177, 0.28)',
			},
		},
		MuiInputBase: {
			root: {
				width: '100%',
			},
		},
	},
})

export default theme

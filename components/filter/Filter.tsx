import IconButton from '@material-ui/core/IconButton'
import Apps from '@material-ui/icons/Apps'
import { Row, Item } from '@mui-treasury/components/flex'

import { useGrowIconButtonStyles } from '@mui-treasury/styles/iconButton/grow'
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized'

import { Box, Typography } from '@material-ui/core'

export const Filter = () => {
	const defaultGrowStyles = useGrowIconButtonStyles()
	return (
		<Box
			component='div'
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			padding='10px 0'
			marginTop={2}
			marginBottom={2}
		>
			<Typography variant='caption' color='textSecondary'>
				Filter
			</Typography>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '50%',
				}}
			>
				{Array(4)
					.fill('')
					.map((_, i) => {
						return (
							<Item key={i}>
								<IconButton size='small' classes={defaultGrowStyles}>
									<Apps fontSize='small' />
								</IconButton>
							</Item>
							// <Item key={i}>
							// 	<IconButton
							// 		classes={defaultGrowStyles}
							// 		// className={customGrowStyles.root}
							// 		// disableTouchRipple
							// 	>
							// 		{/* <img
							// 			alt={''}
							// 			style={{ width: '16px', height: '16px' }}
							// 			src={
							// 				'https://seeklogo.com/images/O/open-collective-logo-8C2D7E16D3-seeklogo.com.png'
							// 			}
							// 		/> */}
							// 		<Apps />
							// 	</IconButton>
							// </Item>
						)
					})}
			</div>
		</Box>
	)
}

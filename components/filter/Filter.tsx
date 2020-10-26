import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Apps from '@material-ui/icons/Apps'
import { Row, Item } from '@mui-treasury/components/flex'

import { useGrowIconButtonStyles } from '@mui-treasury/styles/iconButton/grow'
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized'
import { Box, Typography } from '@material-ui/core'

export const Filter = () => {
   const largeStyles = useSizedIconButtonStyles({ childSize: 64, padding: 12 })
   const defaultGrowStyles = useGrowIconButtonStyles()
   const customGrowStyles = useGrowIconButtonStyles({
      color: '#ABCFF8',
      thickness: 6,
   })
   return (
      <Box
         component='div'
         display='flex'
         justifyContent='space-between'
         alignItems='center'
         padding={5}
      >
         <Typography variant='h5' style={{ flexGrow: 1 }} color='textSecondary'>
            Filter
         </Typography>
         <div
            style={{
               display: 'flex',
               justifyContent: 'space-between',
               width: '30%',
            }}
         >
            {Array(6)
               .fill('')
               .map((_, i) => {
                  return (
                     <Item key={i}>
                        <IconButton
                           classes={defaultGrowStyles}
                           // className={customGrowStyles.root}
                           disableTouchRipple
                        >
                           <img
                              alt={''}
                              style={{ width: '30px', height: '30px' }}
                              src={
                                 'https://seeklogo.com/images/O/open-collective-logo-8C2D7E16D3-seeklogo.com.png'
                              }
                           />
                        </IconButton>
                     </Item>
                  )
               })}
         </div>
      </Box>
   )
}

// import React, { useState } from 'react'
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import InputBase from '@material-ui/core/InputBase'
// import Divider from '@material-ui/core/Divider'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'

// const useStyles = makeStyles((theme: Theme) =>
//    createStyles({
//       root: {
//          padding: '2px 4px',
//          display: 'flex',
//          alignItems: 'center',
//          width: 400,
//          margin: '25px 0 30px',
//          '&:hover': {
//             boxShadow: '0 9px 25px 0 rgba(132, 128, 177, 0.28)',
//          },
//          backgroundColor: 'rgba(81, 33, 111, 0.25)',
//          color: '#fff',
//       },
//       input: {
//          marginLeft: theme.spacing(3),
//          flex: 1,
//       },
//       iconButton: {
//          padding: 10,
//          color: theme.palette.primary.main,
//       },
//       divider: {
//          height: 28,
//          margin: 4,
//       },
//    })
// )

// export default function MainSearch() {
//    const classes = useStyles()

//    return (
//       <Paper
//          component='form'
//          className={classes.root}
//          // elevation={2}
//       >
//          {/* <IconButton className={classes.iconButton} aria-label='menu'>
//             <MenuIcon />
//          </IconButton> */}
//          <InputBase
//             className={classes.input}
//             placeholder='Search a product'
//             inputProps={{ 'aria-label': 'search google maps' }}
//          />
//          <IconButton
//             type='submit'
//             className={classes.iconButton}
//             aria-label='search'
//          >
//             <SearchIcon />
//          </IconButton>
//       </Paper>
//    )
// }

import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { useInputStyles } from '../../styles/roundInput'

const MainSearch = () => {
   const styles = useInputStyles()
   return (
      <div>
         <InputBase
            classes={styles}
            color={'secondary'}
            placeholder={'Enter an product name'}
            startAdornment={<SearchIcon />}
         />
      </div>
   )
}

export default MainSearch

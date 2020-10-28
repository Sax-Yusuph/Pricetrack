import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MultipleSelect from './MultiSelect'
import { defaultStores } from '../../utils/defaultStores'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         padding: '2px 4px',
         display: 'flex',
         alignItems: 'center',
         width: 400,
         margin: '25px 0 30px',
         '&:hover': {
            boxShadow: '0 9px 25px 0 rgba(132, 128, 177, 0.28)',
         },
         // backgroundColor: 'rgba(81, 33, 111, 0.25)',
         color: '#fff',
      },
      input: {
         marginLeft: theme.spacing(3),
         flex: 1,
      },
      iconButton: {
         padding: 10,
         color: theme.palette.primary.main,
      },
      divider: {
         height: 28,
         margin: 4,
      },
   })
)

export default function MainSearch() {
   const classes = useStyles()
   const [search, setSearch] = useState('')
   const [storeName, setStoreName] = useState<string[]>([])

   const router = useRouter()

   const handleChange = (e: any) => {
      setSearch(e.target.value)
   }
   const handleSubmit = (e: any) => {
      e.preventDefault()
      if (!search) return
      const storeNames = storeName.length === 0 ? defaultStores : storeName
      const query = search.toLowerCase().replace(/\s/g, '%20')
      const storeParams = storeNames.join(',')
      const searchString = `${window.location.href}products/${query}?stores=${storeParams}`
      console.log(searchString)
      if (router.pathname === '/') router.push(searchString)
   }

   return (
      <Paper
         component='form'
         className={classes.root}
         onSubmit={handleSubmit}
         // elevation={2}
      >
         <MultipleSelect storeName={storeName} setStoreName={setStoreName} />
         {/* <IconButton className={classes.iconButton} aria-label='menu'>
            <MenuIcon />
         </IconButton> */}
         <Divider className={classes.divider} orientation='vertical' />
         <InputBase
            className={classes.input}
            onChange={handleChange}
            placeholder='Search a product'
            inputProps={{ 'aria-label': 'search google maps' }}
         />
         <IconButton
            onClick={handleSubmit}
            type='submit'
            className={classes.iconButton}
            aria-label='search'
         >
            <SearchIcon />
         </IconButton>
      </Paper>
   )
}

// import React, { SyntheticEvent } from 'react'
// import InputBase from '@material-ui/core/InputBase'
// import SearchIcon from '@material-ui/icons/Search'
// import { useInputStyles } from '../../styles/roundInput'

// const MainSearch = () => {
//    const styles = useInputStyles()

//    const handleSubmit = (e: SyntheticEvent) => {
//       console.log(e.target)
//    }
//    return (
//       <div>
//          <InputBase
//             onSubmit={handleSubmit}
//             classes={styles}
//             color={'secondary'}
//             placeholder={'Enter an product name'}
//             startAdornment={<SearchIcon />}
//          />
//       </div>
//    )
// }

// export default MainSearch

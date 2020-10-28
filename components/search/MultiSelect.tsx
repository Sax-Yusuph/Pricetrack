import {
   createStyles,
   withStyles,
   makeStyles,
   Theme,
} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
// import MenuIcon from '@material-ui/icons/Menu'
import InputBase from '@material-ui/core/InputBase'

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      formControl: {
         margin: theme.spacing(1),
         // minWidth: 120,
         // maxWidth: 300,
      },
      label: {
         padding: 15,
         transform: 'none',
         // '&hover':{
         //    transfor
         // }

         // color: theme.palette.primary.main,
      },
      listItem: {
         fontSize: '0.8rem',
      },
   })
)
const CustomInput = withStyles((theme: Theme) =>
   createStyles({
      root: {
         // 'label + &': {
         //    marginTop: theme.spacing(3),
         // },
      },
      input: {
         borderRadius: 4,
         position: 'relative',
         border: '1px solid #ced4da',
         backgroundColor: theme.palette.divider,
         fontSize: '0.8rem',
         width: 50,
         padding: '10px 26px 10px 12px',
         transition: theme.transitions.create(['border-color', 'box-shadow']),
         // Use the system font instead of the default Roboto font.
         fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
         ].join(','),
      },
   })
)(InputBase)

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         // width: 150,
      },
   },
}

const stores = ['jumia', 'konga', 'ebay', 'kara', 'slot', 'ali Express']

type MultipleSelectProps = {
   storeName: string[]
   setStoreName: React.Dispatch<React.SetStateAction<string[]>>
}

export default function MultipleSelect(props: MultipleSelectProps) {
   const classes = useStyles()
   const { storeName, setStoreName } = props

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setStoreName(event.target.value as string[])
   }

   return (
      <>
         <FormControl className={classes.formControl}>
            {storeName.length === 0 && (
               <InputLabel
                  className={classes.label}
                  id='demo-mutiple-name-label'
               >
                  Stores
               </InputLabel>
            )}
            <Select
               labelId='demo-mutiple-checkbox-label'
               id='demo-mutiple-checkbox'
               multiple
               value={storeName}
               onChange={handleChange}
               input={<CustomInput placeholder='Search a product' />}
               renderValue={(selected) => (selected as string[]).join(', ')}
               MenuProps={MenuProps}
            >
               {stores.map((name) => (
                  <MenuItem key={name} value={name}>
                     <Checkbox checked={storeName.indexOf(name) > -1} />
                     <ListItemText primary={name} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </>
   )
}

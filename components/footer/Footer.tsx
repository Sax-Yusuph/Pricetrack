import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import LanguageIcon from '@material-ui/icons/Language'
import Github from '@material-ui/icons/GitHub'
import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         top: 'auto',
         bottom: 0,
         backgroundColor: '#fff',
         boxShadow: 'none',
         borderTop: '1px solid #ddd',
         fontSize: 12,
      },
      title: {
         flexGrow: 1,
         color: '#333',
      },
      copyright: {
         color: theme.palette.grey[500],
         position: 'absolute',
         top: 17,
         left: '50%',
         transform: 'translateX(-50%)',
      },
      toolbar: {
         alignItems: 'center',
         justifyContent: 'space-between',
      },
      terms: {
         color: '#7D7A9E',
         marginRight: theme.spacing(2),
      },
      logo: {
         marginRight: theme.spacing(1),
         color: theme.palette.grey[600],
      },
   })
)

interface fProp {
   text: string
   classname?: any
}
const FooterItem = ({ text, classname }: fProp) => {
   return (
      <Typography variant='body2' className={classname}>
         {text}
      </Typography>
   )
}

export default function Footer() {
   const classes = useStyles()
   return (
      <AppBar position='fixed' className={classes.root}>
         <Toolbar className={classes.toolbar}>
            <div style={{ display: 'flex' }}>
               <FooterItem
                  text='Terms and Conditions'
                  classname={classes.terms}
               />
               <FooterItem text='Privacy Policy' classname={classes.terms} />
            </div>
            <FooterItem
               text={'Copyright ©  Sax-Yusuph ' + new Date().getFullYear()}
               classname={classes.copyright}
            />
            <div>
               <IconButton
                  className={classes.logo}
                  edge='end'
                  color='inherit'
                  aria-label='Github Icon'
               >
                  <Github />
               </IconButton>
               <IconButton
                  className={classes.logo}
                  edge='end'
                  color='inherit'
                  aria-label='Github Icon'
               >
                  <LanguageIcon />
               </IconButton>
            </div>
         </Toolbar>
      </AppBar>
   )
}

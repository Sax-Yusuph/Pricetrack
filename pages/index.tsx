import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import MainSearch from '../components/search/MainSeacrhBar'
import Layout from '../components/Layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      paper: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         paddingLeft: 20,
         paddingRight: 20,
         minHeight: '50vh',
         width: '100%',
         // background: `url('./public/img/left-circles.svg') no-repeat left bottom, linear-gradient(to left bottom, #48bb78, #40c476, #37ce74, #2bd772, #1ce06e)`,
      },
      root: {
         height: '100vh',
         justifyContent: 'center',
         alignItems: 'center',
         overflowY: 'hidden',
      },
      box: {
         height: 'calc(100vh - 65px)',
         margin: 'auto',
         width: '100vh',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
   })
)
export default function Index() {
   const classes = useStyles()
   return (
      <Container maxWidth='xl' className={classes.root}>
         <Layout>
            <Box component='div' className={classes.box}>
               <Paper
                  // variant='outlined'
                  elevation={1}
                  className={classes.paper}
               >
                  <Typography variant='h4' component='h4' gutterBottom>
                     PriceTrack
                  </Typography>
                  <Typography variant='subtitle2' gutterBottom>
                     Track the prices of thousands of products in realtime.
                  </Typography>
                  <MainSearch />
                  <Typography variant='body2' component='p'>
                     supported stores
                  </Typography>
               </Paper>
            </Box>
         </Layout>
      </Container>
   )
}

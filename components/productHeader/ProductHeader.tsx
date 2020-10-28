import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import {
   makeStyles,
   withStyles,
   createStyles,
   Theme,
} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import NavTabs from '../../components/navbar/Tabs'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
// import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import { Line } from 'react-chartjs-2'
import useChart from '../../hooks/useChart'
import { DataProps } from '../../interfaces'

// custom styles ********************
const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      paper: {
         // display: 'flex',
         // flexDirection: 'column',
         // alignItems: 'center',
         // justifyContent: 'center',
         padding: 20,
         paddingBottom: 15,
         marginTop: 20,
         marginBottom: 20,
         width: '100%',
         border: '2px solid',
         borderColor: theme.palette.grey[200],
         transition: 'all 5s ease',
      },
      root: {
         height: '100vh',
         justifyContent: 'center',
         alignItems: 'center',
      },
      grid: {
         padding: theme.spacing(3),
         height: '100%',
      },
      title: {
         marginBottom: theme.spacing(3),
      },
      tabs: {
         position: 'relative',
         width: 'auto',
         margin: 'auto',
      },
      cardContainer: {
         position: 'relative',
         // height: '40vh',
         display: 'flex',
         alignItems: 'flex-start',
         justifyContent: 'center',
         width: '100%',
         border: '1px solid #ddd',
         boxShadow: 'none',
      },
      imgCard: {
         boxShadow: 'none',
      },
      chartArea: {
         position: 'relative',
         // height: '40vh',
         display: 'flex',
         alignItems: 'flex-start',
         justifyContent: 'center',
         width: '100%',
         border: '1px solid #ddd',
         boxShadow: 'none',
         // minHeight: 200,
      },
   })
)

// custom skeleton component  ***********************
const StyledSkeleton = withStyles({
   root: {
      borderRadius: 'none',
   },
})(Skeleton)

// function show Data grid
interface showTabsProps {
   options: {
      tabIndex: number
      setTabIndex: React.Dispatch<React.SetStateAction<number>>
      classes: any
      chartData: {}
      chartOptions: {}
   }
}

interface showTabs2Props {
   options: {
      tabIndex2: number
      setTabIndex2: React.Dispatch<React.SetStateAction<number>>
      classes: any
   }
}

const ShowTabs = ({ options }: showTabsProps) => {
   const { tabIndex, setTabIndex, classes, chartData, chartOptions } = options
   return (
      <>
         {tabIndex === 0 ? (
            <Paper elevation={0} className={classes.cardContainer}>
               <Card className={classes.imgCard}>
                  <CardMedia
                     component='img'
                     alt='demo product'
                     height='200'
                     image='/img/1.jpg'
                     style={{ objectFit: 'contain' }}
                  />
               </Card>
            </Paper>
         ) : tabIndex === 1 ? (
            <div>
               <Line
                  // height={100}
                  // width={500}
                  data={chartData}
                  options={chartOptions}
               />
            </div>
         ) : (
            <StyledSkeleton variant='rect' height={200} />
         )}

         {/* Tab control  buttons */}
         <div style={{ position: 'relative', marginTop: 40 }}>
            <div
               style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
               <NavTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
            </div>
         </div>
         {/* // <Box minHeight={200} bgcolor='#F4F7FA' borderRadius={8} /> */}
      </>
   )
}

const ShowTabsSkeleton = ({ options }: showTabs2Props) => {
   const { tabIndex2, classes, setTabIndex2 } = options

   return (
      <>
         {tabIndex2 === 0 ? (
            <Paper elevation={0} className={classes.cardContainer}>
               <StyledSkeleton variant='rect' height={200} width='100%' />
            </Paper>
         ) : tabIndex2 === 1 ? (
            <StyledSkeleton variant='rect' height={200} width='100%' />
         ) : (
            <StyledSkeleton variant='rect' height={200} />
         )}

         {/* Tab control  buttons */}
         <div style={{ position: 'relative', marginTop: 40 }}>
            <div
               style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
               <NavTabs tabIndex={tabIndex2} setTabIndex={setTabIndex2} />
            </div>
         </div>
      </>
      // <Box minHeight={200} bgcolor='#F4F7FA' borderRadius={8} />
   )
}

// main function *****************************************
export default function ProductHeader({ data, isLoading }: DataProps) {
   const classes = useStyles()
   // refine data object to get PriceProps
   const PriceData = data?.items.map((item) => {
      return { store: item.websiteName, price: item.actualPrice.value }
   })
   const { chartData, chartOptions }: any = useChart(PriceData)
   const [tabIndex, setTabIndex] = useState(0)
   const [tabIndex2, setTabIndex2] = useState(0)

   return (
      <Paper
         // variant='outlined'
         elevation={0}
         className={classes.paper}
      >
         <Grid
            container
            className={classes.grid}
            spacing={2}
            justify='center'
            alignItems='center'
         >
            {/* first grid for search details */}
            <Grid item md={6}>
               <Paper
                  elevation={0}
                  style={{
                     boxShadow: 'none',
                  }}
               >
                  <Typography
                     variant='h3'
                     component='h2'
                     className={classes.title}
                  >
                     {isLoading ? (
                        <StyledSkeleton variant='text' />
                     ) : (
                        'Infinix note 5 pro'
                     )}
                  </Typography>

                  <Typography variant='body2' component='h4'>
                     {isLoading ? (
                        <>
                           <StyledSkeleton variant='text' />
                           <StyledSkeleton variant='text' />
                           <StyledSkeleton variant='text' width='85%' />
                           <StyledSkeleton variant='text' width='60%' />
                        </>
                     ) : (
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis dolorem, deleniti praesentium consequuntur atque eos aliquid dolores officia distinctio totam vel! Inventore minus exercitationem dolorum, soluta voluptatum aliquam est ut.'
                     )}
                  </Typography>
               </Paper>
            </Grid>

            {/* second grid for images, price alert, and graph */}

            <Grid item md={6}>
               {isLoading ? (
                  <ShowTabsSkeleton
                     options={{ tabIndex2, setTabIndex2, classes }}
                  />
               ) : (
                  <ShowTabs
                     options={{
                        tabIndex,
                        setTabIndex,
                        classes,
                        chartData,
                        chartOptions,
                     }}
                  />
               )}
            </Grid>
         </Grid>
      </Paper>
   )
}

// {tabIndex === 0 ? (
//    </Paper>
// ) : tabIndex === 1 ? (
//    <div>
//       {isLoading ? (
//          <StyledSkeleton
//             variant='rect'
//             height={200}
//             width='100%'
//          />
//       ) : (
//          <Line
//             // height={100}
//             // width={500}
//             data={chartData}
//             options={chartOptions}
//          />
//       )}
//    </div>
// ) : (
//    // render form component  here
//
//    // <Box minHeight={200} bgcolor='#F4F7FA' borderRadius={8} />
// )}

//

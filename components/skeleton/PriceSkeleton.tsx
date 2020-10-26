import { makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Row, Column, Item } from '@mui-treasury/components/flex'
import Skeleton from '@material-ui/lab/Skeleton'

const StyledSkeleton = withStyles({
   root: {
      borderRadius: 'none',
   },
})(Skeleton)

const useBasicProfileStyles = makeStyles(({ palette }: Theme) => ({
   avatar: {
      borderRadius: 8,
      backgroundColor: palette.grey[300],
   },
   overline: {
      fontSize: 8,
      textTransform: 'uppercase',
      letterSpacing: 1,
      color: '#8D9CAD',
      lineClamp: 1,
      boxOrient: 'vertical',
      overflow: 'hidden',
      display: '-webkit-box',
      whiteSpace: 'pre-wrap',
      textOverflow: 'ellipsis',
   },
   name: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#495869',
   },
}))

const BasicProfile = () => {
   const styles = useBasicProfileStyles()
   return (
      <Row>
         <Item>
            <Avatar className={styles.avatar}>$</Avatar>
         </Item>
         <Item position={'middle'} pl={{ sm: 0.5, lg: 0.5 }} grow={1}>
            <Typography className={styles.overline}>
               <StyledSkeleton width='100%' />
            </Typography>
            <Typography className={styles.name}>
               <StyledSkeleton width='100%' />
            </Typography>
         </Item>
      </Row>
   )
}

const useCardHeaderStyles = makeStyles(() => ({
   root: { paddingBottom: 0 },
   title: {
      fontSize: '0.8rem',
      color: '#122740',
      lineClamp: 2,
      boxOrient: 'vertical',
      overflow: 'hidden',
      display: '-webkit-box',
      whiteSpace: 'pre-wrap',
      textOverflow: 'ellipsis',
   },
   subheader: {
      fontSize: '0.6rem',
      color: '#495869',
   },
}))

const CardHeader = () => {
   const styles = useCardHeaderStyles()
   return (
      <Row>
         <Item position={'middle'} grow={1}>
            <Typography className={styles.title}>
               <StyledSkeleton width='100%' />
            </Typography>
            <Typography className={styles.subheader}>
               <StyledSkeleton width='100%' />
            </Typography>
         </Item>
         <Item position={'right'} mr={-0.5}>
            <Skeleton variant='circle' width='40px' height={40} />
         </Item>
      </Row>
   )
}

const useStyles = makeStyles((theme: Theme) => ({
   card: {
      border: '2px solid',
      borderColor: theme.palette.grey[200],
      borderRadius: 16,
      transition: '0.4s',
      '&:hover': {
         borderColor: theme.palette.primary.main,
      },
   },
   prodImg: {
      width: '100%',
      objectFit: 'contain',
      borderRadius: 8,
      // [theme.breakpoints.up('sm')]: {
      //    height: 150,
      // },
   },
   skeleton: {
      borderRadius: 'none',
   },
}))

const PriceSkeleton = () => {
   const styles = useStyles()
   const gap = { xs: 1, sm: 1.5, lg: 2 }
   return (
      <Column
         className={styles.card}
         p={{ xs: 0.5, sm: 0.75, lg: 1 }}
         gap={gap}
      >
         <Item>
            {/* <Box minHeight={180} bgcolor={'#F4F7FA'} borderRadius={8} /> */}
            <Skeleton variant='rect' height={180} className={styles.skeleton} />
         </Item>
         <CardHeader />
         <BasicProfile />
      </Column>
   )
}
export default PriceSkeleton

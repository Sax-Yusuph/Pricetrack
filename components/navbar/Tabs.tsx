import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ImageIcon from '@material-ui/icons/Image'
import AssessmentIcon from '@material-ui/icons/Assessment'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import { useState } from 'react'

const useTabStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         backgroundColor:
            theme.palette.type === 'light' ? '#eee' : theme.palette.divider,
         borderRadius: 10,
         minHeight: 44,
      },
      flexContainer: {
         display: 'inline-flex',
         position: 'relative',
         zIndex: 1,
      },
      scroller: {
         [theme.breakpoints.up('md')]: {
            padding: '0 8px',
         },
      },
      indicator: {
         top: 3,
         bottom: 3,
         right: 3,
         height: 'auto',
         background: 'none',
         '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 4,
            right: 4,
            bottom: 0,
            borderRadius: 8,
            backgroundColor:
               theme.palette.type === 'light'
                  ? theme.palette.common.white
                  : theme.palette.action.selected,
            boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
         },
      },
   })
)

const useTabItemStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         '&:hover': {
            opacity: 1,
         },
         // minHeight: 44,
         // minWidth: 96,
         [theme.breakpoints.up('md')]: {
            minWidth: 120,
         },
      },
      wrapper: {
         // zIndex: 2,
         // marginTop: spacing(0.5),
         color: theme.palette.text.primary,
         textTransform: 'initial',
      },
   })
)

const useIconStyles = makeStyles((theme: Theme) =>
   createStyles({
      icons: {
         // color: theme.palette.primary.main,
         fontSize: 14,
      },
   })
)

interface Props {
   tabIndex: number
   setTabIndex: (a: number) => any
}
const NavTabs = ({ tabIndex, setTabIndex }: Props) => {
   const tabsStyles = useTabStyles()
   const tabItemStyles = useTabItemStyles()
   const iconStyles = useIconStyles()
   return (
      <Tabs
         classes={tabsStyles}
         value={tabIndex}
         onChange={(e, index) => setTabIndex(index)}
      >
         <Tab
            classes={tabItemStyles}
            // icon={<ImageIcon className={iconStyles.icons} />}
            disableRipple
            label={'Image'}
         />
         <Tab
            classes={tabItemStyles}
            // icon={<AssessmentIcon className={iconStyles.icons} />}
            disableRipple
            label={'Graph'}
         />
         <Tab
            classes={tabItemStyles}
            // icon={<NotificationsActiveIcon className={iconStyles.icons} />}
            disableRipple
            label={'Set Alert'}
         />
      </Tabs>
   )
}

export default NavTabs

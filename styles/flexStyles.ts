import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useFlexStyles = makeStyles(() =>
   createStyles({
      parent: {
         display: 'flex',
         alignItems: 'center',
      },
      relativeParent: {
         display: 'flex',
         alignItems: 'center',
         position: 'relative',
      },
      centeredChild: {
         position: 'absolute',
         left: '50%',
         top: '50%',
         transform: 'translate(-50%, -50%)',
      },
      rightChild: {
         marginLeft: 'auto',
      },
      autoChild: {
         flex: 'auto',
      },
   })
)

import React from 'react';
import {Stack,Snackbar} from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
type Bool = {
  isOpen:boolean,
  soc:string
}
export default function SnackBar({isOpen,soc}:Bool) {
  return (
    <Stack sx={{position:'absolute',right:'5%',bottom:'5%'}}>
      <Snackbar open={isOpen} anchorOrigin={{ vertical:"bottom", horizontal:"right" }}>
        <Alert severity="info" sx={{ width: '100%' }}>
        {soc} Text Has Been Coped
        </Alert>
      </Snackbar>
      </Stack>
  )
}

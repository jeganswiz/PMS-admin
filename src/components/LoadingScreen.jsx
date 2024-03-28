import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingScreen({ isDashboard }) {


  return (
    <>
    { 
        !isDashboard && (
            <div>
                <Backdrop
                    sx={{ color: '#000' }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        )
    }
    </>
    
  );
}
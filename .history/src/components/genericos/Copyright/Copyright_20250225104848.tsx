"use client"
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function CopyrightComponent(props: any) {
    return (
      <><Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {/* <Link color="inherit" href="/"> */}
          Sistema Maxcarga 
        {/* </Link>{' '} */}
        {" "}{new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">Developed by W4B Empreendimentos.</Typography>
      </>
    );
  }
import { Typography } from '@mui/material';

import resumeData from '../../utils/resumeData'

import './Footer.css'

export default function Footer(){
    return(
        <div className= "footer mb_30">
            {/* Footer Left Side */}
            <div className='footer_left'>
                <Typography className='footer_name'>
                    {resumeData.name}
                </Typography>
            </div>
            
            {/* Footer Right Side */}
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    {"Designed and developed by "}
                    <a href='/' target='_blank' rel='noreferrer'> 
                        {resumeData.name}
                    </a>
                </Typography>
            </div>
        </div>
    );
};
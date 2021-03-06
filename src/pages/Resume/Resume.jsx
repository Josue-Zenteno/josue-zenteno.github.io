import { Grid, Icon, Paper, Typography } from '@mui/material'
import CustomTimeLine, {CustomTimeLineSeparator} from '../../components/TimeLine/TimeLine'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import resumeData from '../../utils/resumeData';
import './Resume.css'
import { TimelineItem, TimelineContent, TimelineDot } from '@mui/lab';

export default function Resume(){
    return(
        <>
            {/* Education and Experiences*/}
            <Grid container className='section pb_45 pt_20'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>
                        ¿Qué he hecho?
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* Working history */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeLine title='Experiencia previa' icon={<WorkIcon/>}>
                                {resumeData.experiencies.map(experience => (
                                    <TimelineItem key={experience.title}>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>
                                                {experience.title}
                                            </Typography>
                                            <Typography variant='caption' className='timeline_date'>
                                                {experience.date}
                                            </Typography>
                                            <Typography variant='body2' className='timeline_description'>
                                                {experience.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>

                        {/* Education history */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeLine title='Estudios realizados' icon={<SchoolIcon/>}>
                                {resumeData.educations.map(education => (
                                    <TimelineItem key={education.title}>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>
                                                {education.title}
                                            </Typography>
                                            <Typography variant='caption' className='timeline_date'>
                                                {education.date}
                                            </Typography>
                                            <Typography variant='body2' className='timeline_description'>
                                                {education.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>
                        Habilidades Blandas
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>
                        {resumeData.services.map(service =>(
                            <Grid key={service.title} item xs={12} sm={6} md={3}>
                                <div className='service'>
                                    <Icon className='service_icon'>
                                        {service.icon}
                                    </Icon>
                                    <Typography variant='h6' className='service_title'>
                                        {service.title}
                                    </Typography>
                                    <Typography variant='body2' className='service_description'>
                                        {service.description}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            
            {/* Skills */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>
                        Habilidades Duras
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-between' className='p_15'>
                    {resumeData.skills.map(skill=>(
                        <Grid key={skill.title} item xs={12} sm={6} md={3}>
                            <Paper elevation={0} className='skill'>
                                <Typography variant='h6' className='skill_title'>
                                    {skill.title}
                                </Typography>
                                {skill.description.map(element =>(
                                    <Typography key={element} variant='body2' className='skill_description'>
                                        <TimelineDot variant={'outlined'} className='timeline_dot'/>
                                        {element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

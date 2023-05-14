import {
    Grid,
    Typography,
    Button,
    Container,
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    CardActionArea,
    CardHeader,
    Avatar,
    IconButton,
    Paper,
    TextField,
    InputAdornment,
    SvgIcon,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,

} from '@mui/material'
import ButtonAppBar from "@/components/ButtonAppBar";
import { useRouter } from 'next/router'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import * as React from 'react';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import moment from "moment";

export default function Book() {
    const [date, setDate] = React.useState<Date | null>(null);
    const [time, setTime] = React.useState<Date | null>(null);
    const [email, setEmail] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const router = useRouter();
    const handleDateChange = (date: Date | null) => {
        setDate(date);
    }
    const handleTimeChange = (time: Date | null) => {
        setTime(time);
    }

   
    
    function shouldDisableDate(date: string | number | Date) {
        // Check if date.getDay() is a function
        // Only friday sat and sun
        date = new Date(date)
        return date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4;

    }



    const sendMail = async (to: string) => {

        // Convert date to string
        let dateString = moment(date).format('MMMM Do YYYY, h:mm:ss a')
        const res = await fetch('/api/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to, dateString })
        })
        const text = await res.text()
        console.log(text)
    };

    const handleClick = () => {
        // send an email.
        sendMail(email);
        // Redirect to / confirmed
        router.push('/confirmed');
    }

    function shouldDisableTime(time: string | number | Date) {
        // Check if date.getDay() is a function
        // Only friday sat and sun from 8pm to 2am
        time = new Date(time)
        if (time.getHours() > 20 || time.getHours() < 2) {
            return false
        }
        return true
    }

    return (
        <>
            <ButtonAppBar />

            <Grid sx={{
            flexGrow: 1,
            minHeight: '100vh',
            objectFit: 'cover',
            backgroundColor: 'rgb(34,30,29)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>

           <Grid item sx={
                {
                    backgroundColor: 'rgb(56,56,56)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    borderRadius: '10px',
                    padding: '10px',

                }
           }>
                <Grid item xs={6} sx={{
                }
                }>
                    <Typography variant="h2" sx={
                        {
                            color: 'white',
                            fontWeight: 'bold',
                        }
                    }>
                        Book
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateCalendar
                            disablePast
                            value={date}
                            minDate={new Date()}
                            onChange={handleDateChange}
                            sx={
                                {
                                    // Linear gradient background
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    // Outline color white
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        }
                                    },
                                    borderRadius: '10px',
                                }
                            }
                            shouldDisableDate={(date) => shouldDisableDate(date)}
                        />
                        <Grid item  sx={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }
                        } xs={12}>
                            <TextField

                                id="input-with-icon-textfield"
                                label="Email"
                                ref={emailRef}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                sx={
                                    {
                                        margin: '10px',
                                        // Outline color white
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            }
                                        }
                                        // Outline white on hover
                                        , '&:hover .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            }
                                        }
                                        // Outline default on focus
                                        , '& .MuiOutlinedInput-root.Mui-focused': {
                                            '& fieldset': {
                                                borderColor: 'primary.main',
                                            }
                                        }
                                        // Text color white
                                        , '& .MuiOutlinedInput-input': {
                                            color: 'white',
                                        }
                                        // Placeholder color white
                                        , '& .MuiInputLabel-outlined': {
                                            color: 'white',
                                        }
                                    }
                                }
                            >

                            </TextField>
                            <TextField
                                id="input-with-icon-textfield"
                                label="Name"
                                variant="outlined"
                                ref={passwordRef}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={
                                    {
                                        // Outline color white
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            }
                                        }
                                        // Outline white on hover
                                        , '&:hover .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            }
                                        }
                                        // Outline default on focus
                                        , '& .MuiOutlinedInput-root.Mui-focused': {
                                            '& fieldset': {
                                                borderColor: 'primary.main',
                                            }
                                        }
                                        // Text color white
                                        , '& .MuiOutlinedInput-input': {
                                            color: 'white',
                                        }
                                        // Placeholder color white
                                        , '& .MuiInputLabel-outlined': {
                                            color: 'white',
                                        }
                                    }
                                }
                            >
                            </TextField>
                        </Grid>

                        {date && <Grid sx={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }
                        } container spacing={3}>

                            <Grid item sx={
                                {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    paddingTop: '1rem',
                                    
                                }
                            } xs={12}>
                                <Typography variant="h6" sx={
                                    {
                                        color: 'white',
                                        fontWeight: 'bold',
                                        paddingRight: '.5rem',
                                        paddingTop: '1rem',


                                    }
                                }>
                                    Book for {moment(date).format('MMMM Do YYYY')} from 8pm to 2am

                                </Typography>
                                <Button onClick={handleClick}
                                        color={'secondary'}

                                        variant="contained" >Confirm</Button>
                            </Grid>
                        </Grid>}
                    </LocalizationProvider>

                </Grid>


              </Grid>
        </Grid>
        </>
    );
}
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

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import moment from "moment";
import {useState} from "react";

export default function Book() {
    const [date, setDate] = React.useState<Date | null>(null);
    const [time, setTime] = React.useState<Date | null>(null);
    const handleDateChange = (date: Date | null) => {
        setDate(date);
    }
    const handleTimeChange = (time: Date | null) => {
        setTime(time);
    }

    const handleBook = () => {
       console.log(date, time)
    }
    function shouldDisableDate(date: string | number | Date) {
        // Check if date.getDay() is a function
        // Only friday sat and sun
        date = new Date(date)
        return date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4;

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
        <Box sx={{ flexGrow: 1 }}>
            <ButtonAppBar />
           <Grid container sx={
                {
                    minHeight: '100vh',
                    width: '100vw',
                    objectFit: 'cover',
                    backgroundColor: '#8a8282',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }
           }>
                <Grid item xs={6}>
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
                            shouldDisableDate={(date) => shouldDisableDate(date)}
                        />

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
                                }
                            } xs={12}>
                                <Typography variant="h6" sx={
                                    {
                                        color: 'white',
                                        fontWeight: 'bold',
                                        paddingRight: '1rem'

                                    }
                                }>
                                    Book for {moment(date).format('MMMM Do YYYY')} from 8pm to 2am

                                </Typography>
                                <Button variant="contained" >Confirm</Button>
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>}
                        {time && date && <Grid sx={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }
                        }
                        container spacing={3}>
                            <Grid item>
                                <Typography variant="h6" sx={
                                    {
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }
                                }>
                                    Confirm booking for {moment(date).format('MMMM Do YYYY')}, at  {moment(time).format('h:mm a')}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={handleBook}>Book</Button>
                            </Grid>
                        </Grid>}



                    </LocalizationProvider>
                </Grid>
              </Grid>
        </Box>
    );
}
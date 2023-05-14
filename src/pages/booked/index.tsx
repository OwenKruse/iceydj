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


export default function Booked() {
    return(
        <>
            <ButtonAppBar />
            <main>
                <Container maxWidth="lg" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    flexDirection: 'column',
                }}>
                    <Grid container sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    } >
                        <Grid item xs={12} sx={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                backgroundColor: 'rgba(24,125,193,0.56)',
                                padding: '2rem',
                                borderRadius: '1rem',
                            }
                        } >
                            <Typography variant="h2" sx={
                                {
                                    color: 'white',
                                    fontWeight: 'bold',
                                }
                            } component="h1" >
                                Thanks for booking!
                            </Typography>
                            <Typography variant="h4" sx={
                                {
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }
                            } component="h1" >
                                Check your email for a confirmation email, and wait for out team to reach out to you!.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}
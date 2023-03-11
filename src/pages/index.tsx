import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import ButtonAppBar from '@/components/ButtonAppBar'
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

import Portfolio from '@/components/Portfolio'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ICEY</title>
        <meta name="description" content="ICEY DJ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <ButtonAppBar />
        <main className={styles.main}>
            <video autoPlay muted loop style={
                {
                    minHeight: '100vh',
                    width: '100vw',
                    objectFit: 'cover',
                }
            } id="myVideo">
                <source src="/videos/DJ_Set_2_MAYBE.mov" type="video/mp4" />
            </video>
            <div className={styles.overlay}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={5} >
                            <Typography variant="h2" sx={
                                {
                                    color: 'white',
                                    fontWeight: 'bold',
                                }
                            } component="h1" >
                                ICEY
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Dj & Producer based in LA
                            </Typography>
                            <Button variant="contained" onClick={
                                () => {
                                    window.location.href = '/book'
                                }
                            } color="secondary" size="large">
                                Book Now
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Portfolio />
      </main>
    </>
  )
}

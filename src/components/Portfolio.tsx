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
import Image from "next/image";


// @ts-ignore
export default function Portfolio() {
    const images = [
        {
            url: 'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/308933928_788615872209765_6589127148135753020_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=7AZ4RAu5peoAX-Xi8kE&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjkzNzAxMTA4NDk3MzQ2NjYxOQ%3D%3D.2-ccb7-5&oh=00_AfC1P102Z6EsKYxsBkqcPmtNseIWWf3H8NQfB6_ncvGGBQ&oe=640EC6CB&_nc_sid=6136e7',
        },
        {
            url: 'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/332710693_704811084519073_4530949487128770152_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=LQLbvT6zDAkAX_PCgh1&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA0NDA4OTU1Mzg0MzAwNTU3Mw%3D%3D.2-ccb7-5&oh=00_AfCGdKgPdCR2uX5glOcmXoZuJ3NVITzKZnNuyWGUX3Alag&oe=640D83F1&_nc_sid=1527a3',
        },
        {
            url: 'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/332575508_601446578466147_5428468572618946487_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=BTH65zaDLj8AX_YcpME&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA0NDA5Mzc2MzkwOTIwODU2Mw%3D%3D.2-ccb7-5&oh=00_AfDgJyxX4y1c0kWd29K_CFXtrM0UMpA4HaST80VN8zVDNQ&oe=640E2A57&_nc_sid=1527a3'
        },
    ]


    return (
    <Grid sx={
        {
            width: '100vw',
            backgroundColor: '#231232',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
        }
    }>
        <Grid item sx={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }
        }>
            {/* Map the images to cards */
            images.map((image, index) => (
                <Card
                    key={index}
                    sx={
                    {
                        minWidth: '300px',
                        minHeight: '300px',
                        width: '30vw',
                        height: '30vw',
                        maxWidth: '500px',
                        maxHeight: '500px',
                        margin: '1rem',
                        position: 'relative',
                        objectFit: 'cover',
                    }
                }>
                    <Image
                        src={image.url}
                        alt="Picture of the author"
                        // Crop the image to a square
                        fill
                        style={
                            {
                                objectFit: 'cover',
                            }
                        }
                    />
                </Card>
            ))}
        </Grid>
    </Grid>
    )
}
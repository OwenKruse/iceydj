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
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-19/343292207_762863668819700_9207247554061004376_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=aPcfxUw6nVsAX_ujh_-&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBDYDM0i1IU-lUz5ArG1bYjZRGGfmGlMHE-M1QpF-V96g&oe=646B0573&_nc_sid=f70a57'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345921577_3548379532153165_663197310322683724_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=wAfk_F7DXoIAX9zfYEa&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEwMDA5NzYxOTIyOTc0OTA0Nw%3D%3D.2-ccb7-5&oh=00_AfBzxIwl7OuHmM-D4W9FGHmnyJ6nnO2EnzJewirUXQbiZg&oe=646B26B1&_nc_sid=640168'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345642510_800079124887093_4512508164531272696_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=ZcTA1f50zJwAX_uYZHA&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEwMDA5MzE4MDIxNzkzNDk2NA%3D%3D.2-ccb7-5&oh=00_AfB8Qb73O04MJpVwgl0RcwRIw5nCFh0cG6HZQQVDAO43DA&oe=646C56C5&_nc_sid=640168'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345793933_931965421384105_6729165015149831627_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=kRd_bbXJbBgAX-URu2J&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEwMDA5Mjc4NTEwOTg3ODU2NA%3D%3D.2-ccb7-5&oh=00_AfAgKDrMi4zr3GutVQw8a0zVo6jmXpsnXz5oqqvMsT3myA&oe=646AE328&_nc_sid=640168'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345874145_1308570030091090_3256170645628921145_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=pkt9dFU8LRAAX_JGRHv&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEwMDA4OTU4NTQ2NDcwMDU4MTkxNDY4NTMyOTYxNDEwMw%3D%3D.2-ccb7-5&oh=00_AfCX9LVQBD6iWWT21aSdvCxGiOjgzG08NPcTIDaynHLWaA&oe=646AA603&_nc_sid=640168'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345642505_139879575736285_6051745251531785013_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=M3mFKmhYIUgAX9GI2Ga&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEwMDAxMjAyNzM4MTM3ODAxOQ%3D%3D.2-ccb7-5&oh=00_AfBGQDzOfBphNggDs4qhKYcSEwcQwALkgAnm_KISjL_2-Q&oe=646B9895&_nc_sid=640168'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345756423_629521392042758_2759484508747803374_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=nphZe59ZrdQAX9P-ES2&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEwMDAwNDI4MDIzNTc4NDEyMg%3D%3D.2-ccb7-5&oh=00_AfAupNmorkzfa2jFOMTarpEOH6nP3LfX-8w4parDqxrS1g&oe=646C08F0&_nc_sid=640168'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/346013107_2003678053310353_419453132393597098_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=IpToklvxuu0AX_D93sQ&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTk5NTg0MjcxMzc1MTc0NQ%3D%3D.2-ccb7-5&oh=00_AfCzRZ8GoS5V79DXyXFQ2BQVIhc7CVoGp0BmzQgsXh7s7g&oe=646BD184&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345672293_199387106246370_6526547727821875411_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=Rg1x6FBdhjsAX8meuXI&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTk4MjAxNzIzMDgwMTQ5OQ%3D%3D.2-ccb7-5&oh=00_AfCmlo1oqrtotJAO5P6uvh4m_xTZxmso8W-d3HeakY6xfw&oe=646AE525&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345866585_979651513063950_2498345177224435901_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=8h_vicW3LMgAX_k4dYD&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTg3MTc3ODg0ODE2NDgxNDU4MjYyMTM0MzQxNDYxMDA%3D.2-ccb7-5&oh=00_AfDncbWSVdkK6FYNi544SLax4nwhhg5dCjzrkHJA-39x-Q&oe=646B2481&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345789844_934639817852690_8437388612472088888_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Cd5oWE3zmH4AX-VUnCq&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTg2OTczMTA0MjAwMTY3MA%3D%3D.2-ccb7-5&oh=00_AfDLVlg0HNDHQsbXxzeF5AXaEh9MZPUEDp7rBBIOB_pscg&oe=646C7F07&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345861761_1184311965612692_2708645866089551048_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=QaFJlq0dygIAX9WZMvX&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTg2ODg4MzY0MTUzMDU2Nw%3D%3D.2-ccb7-5&oh=00_AfC7At4PuOE0zS3xYlaplXFTiewoSS_DHzcNOaSw3clFGQ&oe=646B1F7E&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345758456_198196176373849_8786266947124896152_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=j7D5QknxnqwAX9Rjbnp&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTg2Nzk4NjM2MjQ1NTY1Mw%3D%3D.2-ccb7-5&oh=00_AfAscfvBBhYPKKQhqBRKWxNoQBKFIU_DgNs8XSSkJKKPEA&oe=646AB1D2&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345691399_1186634055357650_5500308300592927433_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=DS7yl_vOv5EAX8_VkA8&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTg1MDExNTc1NDY0NDkwOTE2NzE4MjY1ODY2MDQ2MDM%3D.2-ccb7-5&oh=00_AfBoFtR5e2MX41RFlMqzS1G3H8MHV4E6w2SkPDjVKL2cyw&oe=646B1153&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/346044414_151824321031953_7436944887088654179_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=U_dHNMsMxcAAX-av3Ao&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTg0MTM5Nzk2NDc2MDcxOA%3D%3D.2-ccb7-5&oh=00_AfCWDoFrV9wI7VYO6Bjs1OkPLvGs8h6OSv3dLVl4BXR4ZQ&oe=646BAD1E&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345268020_1291465205103624_4073988173775554198_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=aGO6nw0ipRQAX9vYnkU&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTAxNTgwMjk4MzQzNzA0Mjc5MDk2NTMzMjMzODAzNQ%3D%3D.2-ccb7-5&oh=00_AfCGUceWAW3x9i9TIBY-RFoJkpApIi5NadiERbF2BFIOCg&oe=646BA500&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/346070388_693798319422198_3932031535964686322_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=eMsRDZimElcAX8n5VwE&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTAwOTk4MTY1MDIwNTI5Ng%3D%3D.2-ccb7-5&oh=00_AfAU_f7u9vAXtAW1Y8RiagZA9h54LLFJEHYCnJJDE5xLrg&oe=646AB959&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345566357_572628824972130_8361715480296134771_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=IrlcYudUM_cAX8TrApY&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTAwNzA2MTU1MDY3NDQyMA%3D%3D.2-ccb7-5&oh=00_AfAdGbyka13bmuZhID2b_FdLRo3D502Lp3n6b86khjgLzw&oe=646C2667&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345482698_1282040932398724_1712292169080154316_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QZ5kMb7QTEgAX-CUkWl&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTAwNjcwNTg5ODc2MzIzNw%3D%3D.2-ccb7-5&oh=00_AfDF98EIooeubilILfqwCMuYva1l_bcayjs21pYq-5t5iw&oe=646B8BAD&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/346020024_781671100250951_8035945348048284401_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=W9HFj6AOtiAAX9gBi5x&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTAwNDMzNTQxMjQ0NzM4Mg%3D%3D.2-ccb7-5&oh=00_AfAPjEczo0KBTwS56KJwPl_slLyZ2_psWHiWjyK1P2bhOQ&oe=646AA04D&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/346038408_580863917196451_4623429665928358920_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=KXk6w71_Qg0AX8iASO7&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTAwMzA3NzgwOTA4ODU5NA%3D%3D.2-ccb7-5&oh=00_AfAbbXww8d2I9-22baNFlsSB7iVglCAnav_chgVgLVQAdA&oe=646B25BC&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345340499_1700170757066442_1007672155210690805_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=I0T9EKI1-ecAX_9DEfW&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5OTAwMTc4OTI1MTgyODQ4MA%3D%3D.2-ccb7-5&oh=00_AfCpc9pv08X-DT3rWeWrZDxdUgUeGI2TEdLqh6oPq9EVRA&oe=646C4D68&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345785114_567131288620083_7937843164689905468_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=4TFOxwABOvUAX-mOjSv&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODk5ODUwMDgwODM1NjEzNQ%3D%3D.2-ccb7-5&oh=00_AfB_EIzK2YQHguYAry4F5TzN-RxREpircTEJX15GuYHhaQ&oe=646B0F26&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345422525_998557267991001_7098362457510516946_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=6_8-LXSursQAX99VOzk&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODk5NzY1MzY5MzE4ODA2OQ%3D%3D.2-ccb7-5&oh=00_AfC2x8jEMl5uG2gZ0mNPwmTGQMZeq7M1fN72HqbV5mTABA&oe=646C8AC9&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345632610_1265362657406293_4750705233260048656_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=z_EBVqTchGQAX9qKqPv&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODk5NTkyNzAwNzIxMDMzMQ%3D%3D.2-ccb7-5&oh=00_AfB8snA8YTxHR72szbJls8LHU7OkAz2TxrEOshpnRSSXGg&oe=646AECF6&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345276497_1404785406986034_2026836477582966338_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=CiVQ4iiwUzIAX8Cu-99&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODY4NzgzODM3NjAyOTc1MA%3D%3D.2-ccb7-5&oh=00_AfCQ_iH68g9YqO9AdooGuP1SsRs_rynAhYKd4NgqGdRSzg&oe=646B3705&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345312615_195821419956178_2618810312239353231_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=3Dko9GqYQegAX_SkK8k&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODY4Njg2MjE4NTM2NzY2Ng%3D%3D.2-ccb7-5&oh=00_AfBMovnB53TM0na5R5feHBMRtVjkQ0cIOvHZReWMQUxHXw&oe=646B7828&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345418006_563807209230345_652321043105467997_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=bAARZvq1ZsIAX-FxlYd&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODY4MTg0MDMxOTk5MTczOQ%3D%3D.2-ccb7-5&oh=00_AfDRRD5Y4CvZZ-FfBJ0Sdso4n-ouczAVunGGVmU5ZosANA&oe=646C2A97&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345583973_765866528317914_5095254628972887031_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=c4gTtm8wlDMAX8DBoWW&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODY3ODU3OTg2NTc3ODY2Nw%3D%3D.2-ccb7-5&oh=00_AfD7PHfOLBgaX3If1m6zJY1dPugJ9VYdbBF7ZDGFdPf1lg&oe=646BFAC4&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345884281_1387896371943893_5738291057217741720_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=JIdUO87n0zYAX_5d-QK&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODY3NzQwMzk4NDExMDY2MA%3D%3D.2-ccb7-5&oh=00_AfA3D4XHONbAa725yL_wD2-TPM8whrx0b7F7peuvPGJGqg&oe=646B284F&_nc_sid=a1ad6c'
        },
        {
            url:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345475115_6042678215827894_6296225178778974021_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=phagEP-_wYcAX_ghE_H&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODY3NDcwODE1MzkyMDg4MQ%3D%3D.2-ccb7-5&oh=00_AfBi_WAXt6vs1ibCVC4_brw5NHjuh-sDP3Si9x90lVWGmw&oe=646C28FE&_nc_sid=a1ad6c'
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
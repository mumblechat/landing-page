import Heading from "@/theme/components/heading";
import Text from "@/theme/components/text";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import pdf from '../../icons/home/pdf.svg'
import pdf2 from '../../icons/home/pdf2.svg'
import AddressCopy from "./addressCopy";
import mmcticon from '../../icons/home/mmcticon.svg'
import mmctramaicon from '../../icons/home/mmctramaicon.svg'
const useStyles = makeStyles({
    heading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        marginTop: '5rem',
        '@media(max-width : 900px)': {
            marginTop: '0rem',
        }

    },



    btn: {
        backgroundColor: '#00FFFF !important',
        color: '#000',
        padding: '14px 22px',
        display: 'inline-flex',
        textDecoration: 'none',
        fontWeight: '700 !important',
        borderRadius: '5rem',
        width: '250px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#00FFFF !important',
            color: "#000",
            transform: 'translateY(-5px)'
        },
        '@media(max-width : 600px)':{
            width:'100%',
             margin:'0rem 0.5rem'
        }
        
    },
    btn2: {
        backgroundColor: 'transparent !important',
        width: '250px',
        justifyContent: 'center',
        color: '#00FFFF',
        border: '1px solid #00FFFF',
        padding: '14px 22px',
        display: 'inline-flex',
        textDecoration: 'none',
        fontWeight: '700 !important',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '5rem',
        transition: '0.5s',
        '&:hover': {
            transform: 'translateY(-5px)'
        },
        '@media(max-width : 600px)':{
            width:'100%',
            margin:'0rem 0.5rem'
        }
    },
    btnWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        marginTop: '1rem',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            gap: '1rem',
        }
    },
    comingSoon: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem'
    },
    comingSoonText: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '0.8rem 8rem',
        borderRadius: '5rem'
    },
    text__box: {
        textAlign: 'center',
        margin: '1.5rem'
    },



})



const Platform = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Box className={classes.heading}>
                    <Heading heading={'What Is MumbleChat?'} />
                </Box>
                <Box className={classes.comingSoon}>
                    <Typography sx={{
                        '@media(max-width : 600px)': { fontSize: '18px', textAlign: 'center' }
                    }} variant="h4" fontFamily={'Bruce Forever !important'}>Speed Meets Security</Typography>
                </Box>
                <Box className={classes.text__box}>
                    <Text text={"MumbleChat MMCT: Safe, secret chats on Ramestta Blockchain! Your messages stay private (no peeking!), never lost (no servers to crash), and nobody knows it's you (stay anonymous)! Join the fun and connect with new people on MumbleChat MMCT!"} />

                </Box>
                <Box>
                    <Box className={classes.btnWrap}>
                        <Link className={classes.btn} href={"MMCT Whitepaper.pdf"} target="_blank">
                            <Image src={pdf} alt={""} />
                            <Typography> MMCT Whitepaper</Typography>
                        </Link>
                        <Link className={classes.btn2} href={"ICO Whitepaper MMCT.pdf"} target="_blank">
                            <Image src={pdf2} alt={""} />
                            <Typography>MMCT ICO Whitepaper</Typography>
                        </Link>
                    </Box>
                    <Box className={classes.btnWrap}>
                        <AddressCopy title={'MMCT'} text={"0x4b1853C1882ee5c50e5Cb3d7ff05334047AC66Bd"} address={'0x4b18...C66Bd'} icon={mmcticon} redirecr_url={"https://ramascan.com/token/0x4b1853C1882ee5c50e5Cb3d7ff05334047AC66Bd?tab=contract"} />
                        <AddressCopy title={'MMCT/RAMA'} text={"0xC9C827A95BCB7E43589AdAbE9130EAbA90Dd0585"} address={'0xC9C8...d0585'} icon={mmctramaicon} redirecr_url={"https://ramaswap.com/#/add/ETH/0x4b1853C1882ee5c50e5Cb3d7ff05334047AC66Bd"} />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Platform

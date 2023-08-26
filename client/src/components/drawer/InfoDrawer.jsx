import { Drawer,Box,Typography,styled } from "@mui/material"
import Profile from "./Profile"
const Header = styled(Box)`
    background-color: #008069;
    height: 107px;
    color: #FFF;
    display: flex;
    & >p, &>p{
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
    

`

const Component = styled(Box)`
    background: #ededed;
    height: 85%;

`

const Text = styled(Typography)`
    font-size: 18px;

`
const drawerStyle ={
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}
const InfoDrawer=({open,setOpen})=>{

    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps = {{sx: drawerStyle}}
        style = {{zIndex: 1500}}
        >


            <Header>

                <Typography onClick={()=>setOpen(false)}> Back </Typography>


                <Text>Profile</Text>

                

                


            </Header>
            <Component>

                <Profile />

            </Component>
            

        </Drawer>
    )
}

export default InfoDrawer
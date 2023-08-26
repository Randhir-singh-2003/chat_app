import { useEffect } from 'react';
import {Box,Typography,InputBase,styled, IconButton} from '@mui/material';
import { uploadFile } from '../../../service/api';
// import SendIcon from '@mui/icons-material/Send';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    wifth: 100%;
    align-items: center;
    padding: 0 15px;

    & > *{
        margin: 5px;
        color: #919191;
    }

`

const Search=styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: 85vw;
    
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;

`
const Footer = ({sendText,setValue,file,setFile,setImage, value})=>{

    useEffect(()=>{

        const getImage = async() =>{
            if (file){
                const data = new FormData();
                data.append("name",file.name);

                data.append("file",file);

                let response = await uploadFile(data);
                setImage(response.data);


            }
        }
        getImage();

    },[file])

    const onFileChange = (e) =>{
        
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);


    }

    


    
    
    return (

        

        
        <Container>

            <Typography>E</Typography>

            <label htmlFor="fileInput">
                <Typography>A</Typography>

            </label>
            

            <input
                type="file"
                id="fileInput"
                style = {{display:'none'}}
                onChange={(e)=>onFileChange(e)}
            
            />
                <form onSubmit={sendText}>
            <Search>

                <InputField
                placeholder='Type a message'
                autoFocus={true}
                onChange={(e)=>setValue(e.target.value)}
                value={value}
                />
            </Search>

            <button type="submit">Send</button>
                </form>
            
        </Container>
    )
}

export default Footer;
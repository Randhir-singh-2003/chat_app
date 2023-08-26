
import { useContext } from 'react';
import {Box,Typography,StyledComponentProps,styled,IconButton} from '@mui/material';

import { defaultProfilePicture } from '../../../constants/data';

import RamenDiningIcon from '@mui/icons-material/RamenDining';

import { AccountContext } from '../../../context/AccountProvider';

const Header = styled(Box)`

    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;


`;
const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'

});

const Name = styled(Typography)`
     margin-left: 12px !important;

`;

const Status = styled(Box)`
    margin-left: 12px !important;
    font-size: 12px;
    color: rgb(0,0,0,0.6);
    
`;
const RightContainer = styled(Box)`
    margin-left: auto;
    display: flex;

    children{
        padding: 8px;
    }
    
`;
const ChatHeader = ({person})=>{
    console.log(person);


    const {activeUsers} = useContext(AccountContext);
    return (
        <Header>

            <Image src={person.picture} alt="hfj" />
            <Box>
                <Name>{person.name}</Name>
                
                <Status>{activeUsers?.find(user=>user.sub === person.sub)?'Online':'Offline'}</Status>
            </Box>
            <RightContainer>

                <Typography>Search</Typography>
                <Typography>Features</Typography>
                
            </RightContainer>

        </Header>




    )

}

export default ChatHeader;
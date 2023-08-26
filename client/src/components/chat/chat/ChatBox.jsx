import { useContext,useEffect,useState } from 'react';
import {Box,styled} from '@mui/material'

import { AccountContext } from '../../../context/AccountProvider';


import { getConversation } from '../../../service/api';


import ChatHeader from './ChatHeader';
import Messages from './Messages';

// const Component = styled(Box)`
//     background: #f8f9fa;
//     padding: 30px 0;
//     text-align: center;
//     height: 100vh

// `;




const ChatBox = ()=>{

    const {person,account} = useContext(AccountContext);

    const [conversation,setConversation] = useState({});

    useEffect(()=>{
        const getConversationDetails = async ()=>{
            let data = await getConversation({senderId: account.sub,receiverId: person.sub})

            setConversation(data);
        }

        getConversationDetails();

    },[person.sub])
    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>

    )
}

export default ChatBox;
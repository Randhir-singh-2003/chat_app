
import { useEffect, useState,useContext } from 'react';
import {Box,styled,Divider} from '@mui/material';
import { getUsers } from '../../../service/api.js'
import { AccountContext } from '../../../context/AccountProvider.jsx';

import Conversation from './Conversation.jsx';

const Component = styled(Box)`

    height: 81vh;
    overflow: overlay;
`;
const styledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;

`;
const Conversations = ({text})=>{

    

    const [users,setUsers] = useState([]);
    const { account,socket,setActiveUsers } = useContext(AccountContext);

    useEffect(()=>{
        const fetchData = async() =>{
            

            let response = await getUsers()
            console.log("jaha error arra hai "+response);
            const filteredData = response?.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            console.log("jaha error arra hai "+filteredData);
            setUsers(filteredData);
            

        }
        fetchData()
    }, [text])

    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on("getUsers",users=>{
            setActiveUsers(users);

        })

    }, [account])
    return (
        <Component>
            {
                users?.map(user=>(
                    user.sub !== account.sub &&
                    <>
                    <Conversation user={user}/>
                    <styledDivider/>
                    </>
                    
    
                ))

            }
            
        </Component>
    )
}

export default Conversations;
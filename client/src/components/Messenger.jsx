import { useContext } from "react";
import LoginDialog from "./account/LoginDialog";

import { AccountContext } from "../context/AccountProvider";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import ChatDialog from "./chat/ChatDialog";



// multiple components cant be returned in .js or .jsx extension
//  keep it under a common parent
// wrapping is required

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />

        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
    
  );
};

export default Messenger;

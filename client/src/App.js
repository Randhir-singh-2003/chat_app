// components
import Messenger from './components/Messenger.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

import AccountProvider from './context/AccountProvider.jsx';
function App() {
  const clientId='807403982767-qincdo10h1qcju79ctjdn0gfb9p3ms6j.apps.googleusercontent.com'
  
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
          <Messenger />

      </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;

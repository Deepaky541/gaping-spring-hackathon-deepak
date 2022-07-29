import Chat from "../components/Chat"
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from '../components/SignIn';
import "./message.css"

const Message = () => {
    const [user] = useAuthState(auth);
  return ( 
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default Message
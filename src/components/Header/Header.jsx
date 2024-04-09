import { useEffect, useState } from "react";
import { AuthModal } from "../Auth/AuthModal/AuthModal";
import { Login } from "../Auth/LogIn";
import { SignUp } from "../Auth/SignUp";
import SpriteIcons from '../../images/sprite.svg';
import toast from "react-hot-toast";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {
BtnBar,
BtnLogIn,
BtnLogOut,
BtnRegistartion,
Logo,
NavList,
Navigation,
SpanName,
StyledLink,
HeaderBox,
IconUser
} from "./Header.styled";

export const Header = () => {
const [isLoginModalOpen, setLoginModalOpen]= useState(false);
const {isRegistrationModalOpen, setRegistrationModalOpen} =useState(false);
const [authUser, setAuthUser] = useState(null);

const openLoginModal = () => {
setLoginModalOpen(true);
};

const closeLoginModal = () =>{
    setLoginModalOpen(false);
};

const openRegistrationModal = () =>{
    setRegistrationModalOpen(true);
};

const closeRegistrationModal = () =>{
    setRegistrationModalOpen(false);
};

useEffect(() => {
const listen = onAuthStateChanged(auth, user =>{
user? setAuthUser(user) : setAuthUser(null);
});
return() => listen();
}, []);

const SignOut = () => {
    signOut(auth)
    .then(() =>
        toast.success(`See you!` ,{
        position:'top-right',
        duration:5000,
        icon:`🖐️`,
        }))

        .catch(error => 
            toast.error(`Have a problem, ${error}`, {
duration:5000,
position:"top-right",
            }));
};
return(
<HeaderBox>
<Navigation>
    <Logo>Nanny.Services</Logo>

    <NavList>
        <li>
            <StyledLink  to='/'>Home</StyledLink>
        </li>
        <li>
            <StyledLink  to='/nannies'>Nannies</StyledLink>
        </li>
        {authUser &&(
        <li>
        <StyledLink  to='/favorites'>Favorites</StyledLink>    
        </li>)}
    </NavList>

    <div>
        {authUser? (
<>
<IconUser>
<svg width='16' height='16'>
    <use xlinkHref={`${SpriteIcons}#icon-mdi_user`}/>
</svg>
</IconUser>
<SpanName>{authUser.name}</SpanName>
<BtnLogOut onClick={SignOut}><span>Log Out</span></BtnLogOut>
</>
        ):(
        <BtnBar>
<BtnLogIn onClick={openLoginModal} ><span>Log In</span></BtnLogIn>
<BtnRegistartion onClick={openRegistrationModal}><span>Registration</span></BtnRegistartion>
      </BtnBar>
        )}

      <AuthModal id='log' isOpen={isLoginModalOpen}  onRequestClose={closeLoginModal}> 
        <Login onRequestClose={closeLoginModal}/>
      </AuthModal>
      <AuthModal id='reg' isOpen={isRegistrationModalOpen} onRequestClose={closeRegistrationModal}>
        <SignUp onRequestclose={closeRegistrationModal}/>
      </AuthModal>
    </div>
</Navigation>
</HeaderBox>    
);
};


import google from '../../images/google.svg';
import { signInWithPopup } from 'firebase/auth';
import {auth, googleAuthProvider} from '../../firebase';
import toast from 'react-hot-toast';
import { BtnSubmitGoogle, GoogleIcon } from './Auth.styled';

export const AuthProvider = ({onRequestClose}) => {
    function handleSubmitWithGoogle() {
        signInWithPopup(auth, googleAuthProvider)
        .then(userCredential => {
            onRequestClose();
        })

        .catch(error => {
            toast.error(`Not found account!, ${error}`, {
                position: 'top-right',
                duration: 5000,
            });
        });
        
}

return(
<BtnSubmitGoogle onClick={handleSubmitWithGoogle}>
Continue With
<GoogleIcon src={google} alt='google'/>
</BtnSubmitGoogle>
);
};
import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";

const Social = ({ from }) => {
    const { signInWithGoogle } = use(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                navigate(from || '/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn  w-full py-3 text-lg font-semibold disabled:opacity-60 mb-5">
                <FcGoogle />
                Login with Google
            </button>
        </div>
    );
};

export default Social;
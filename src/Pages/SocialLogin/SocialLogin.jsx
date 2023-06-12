import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(result => {
      const user = result.user ;
      console.log(user);
      const name = user.displayName
      const email = user.email
      const photoURL = user.photoURL
  
      const saveUser = { name, email, role: 'student' , photoURL  };

      console.log(user);
      // Make a POST request to store user info in the backend
      fetch('http://localhost:5000/users/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saveUser),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          navigate(from, { replace: true });
        })
        .catch(error => {
          console.error('Error adding user:', error);
        });
    });
  };

  return (
    <div className="text-center flex flex-col items-center justify-center gap-1">
      <p className="text-gray-600">Or sign in with:</p>
      <FcGoogle onClick={handleGoogleSignIn} className="text-5xl cursor-pointer" />
    </div>
  );
};

export default SocialLogin;

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../providers/AuthProvider';
import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                Swal.fire(
                    'Success!',
                    'Login successful!',
                    'success'
                )
            })
            .catch((err) => {
                setError(err.message);
                if (err.code === 'auth/user-not-found') {
                    Swal.fire('Error!', 'User does not exist.', 'error');
                } else if (err.code === 'auth/wrong-password') {
                    Swal.fire('Error!', 'Wrong password.', 'error');
                } else {
                    Swal.fire('Error!', 'Login failed.', 'error');
                }
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from), { replace: true };

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.ibb.co/ct02pvd/signupbg.jpg")` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center text-[#313131]">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="Login" className="btn bg-[#09CCD0] border-0" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Toy Land ? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className=" flex align-middle justify-center border hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"> <FcGoogle className="text-2xl me-2"></FcGoogle> <span>Continue with Google</span></button>
                        <p className='text-center flex'></p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;

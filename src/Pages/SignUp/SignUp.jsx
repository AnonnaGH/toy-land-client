

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';


const SignUp = () => {

    useTitle('Sign Up');
    const { createUser, logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photo.value;
        setError('');

        if (password !== confirm) {
            setError('Your password did not match')
            return
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters or longer! ')
            return
        }
        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                });


                form.reset();
                Swal.fire(
                    'Success!',
                    'Your Account has been created. Please Login.',
                    'success'
                )
                logOut();
                navigate('/login');
            })
            .catch((error) => {
                setError(error.message);
                if (error.code === 'auth/user-not-found') {
                    Swal.fire('Error!', 'User does not exist.', 'error');
                } else if (error.code === 'auth/wrong-password') {
                    Swal.fire('Error!', 'Invalid password.', 'error');
                }
                else if (error.code === 'auth/email-already-in-use') {
                    Swal.fire('Error!', 'This Email Is Already In Use. Try to login!.', 'error');

                    navigate('/login');
                }
                else {
                    Swal.fire('Error!', 'Sign up failed.', 'error');
                }
                form.reset();
            });

    }


    return (

        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.ibb.co/ct02pvd/signupbg.jpg")` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">


                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center text-[#313131]">Sign Up now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='photo' placeholder="photo" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <p className='text-red-600 text-center'>{error}</p>
                                <input type="submit" value="SignUp" className="btn bg-[#09CCD0] border-0 " />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already a member ? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;

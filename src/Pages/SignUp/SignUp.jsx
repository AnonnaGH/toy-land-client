

import { Link } from 'react-router-dom';
// import img from '../../assets/signupbg.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';






const SignUp = () => {


    const { createUser } = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))

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

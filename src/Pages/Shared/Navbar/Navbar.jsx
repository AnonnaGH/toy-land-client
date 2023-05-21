import { Link } from "react-router-dom";
import logo from '../../../assets/Logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    };


    const handleaddNewToyNav = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please log in first to add a new toy!',
            });

        }
    };


    const navItems = <>

        <li className="font-bold text-[#757A7B]"><Link to='/'>Home</Link></li>
        <li className="font-bold text-[#757A7B]"><Link to='/alltoys'>All Toys</Link></li>
        <li className="font-bold text-[#757A7B]"><Link onClick={handleaddNewToyNav} to='/addatoy'>Add New Toy</Link></li>
        {
            user ? <li className="font-bold text-[#757A7B]"><Link to='/mytoys'>My Toys</Link></li> : ""
        }
        <li className="font-bold text-[#757A7B]"><Link to='/blogs'>Blogs</Link></li>


    </>

    return (
        <div className="navbar bg-[#E8F6F7] md:drop-shadow-xl lg:drop-shadow-xl h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">


            </div>
            {
                user?.email ?
                    <>
                        <Link onClick={handleLogOut} className="btn bg-[#09CCD0] border-0">Logout</Link>
                        <div className="avatar placeholder ml-3">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src={user?.photoURL} title={user.displayName} alt="User image" />
                            </div>
                        </div>
                    </>

                    :
                    <>
                        <Link to='/login' className="btn bg-[#09CCD0] border-0">Login</Link>
                        <Link to='/signup' className="btn ml-4 bg-[#09CCD0] border-0">Register</Link>


                    </>
            }

        </div>






    );
};


export default Navbar;







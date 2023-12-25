import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { setShowLogin, login, setLoading, loading, connectGoogle } = useContext(AuthContext);
    const [visibility, setVisibility] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password).then(res => {
            console.log('logged in successfull', res.user)
            window.location.reload()
            navigate('/');
            //   setTimeout(() => { window.location.reload() }, 1000)
        }).catch(err => {
            setLoading(false)
            if (err.message === 'Firebase: Error (auth/invalid-email).') {
                errorNotify('invalid email')
            } else if (err.message === 'Firebase: Error (auth/invalid-login-credentials).') {
                errorNotify('Invalid login information')
            }
            console.error(err.message)
        })

    }
    const handleGoogle = async () => {
        try {
          await connectGoogle();
          console.log('Google login successful');
          setTimeout(() => {
            navigate(location?.state ? location.state : '/dashboard');
          }, 100); // Adjust the delay as needed
        } catch (error) {
          // Handle authentication error
          console.error('Google login failed', error);
        }
      };
      
      
    return (
        <>
            <div data-aos="zoom-out" className="flex flex-col
         justify-center items-center gap-6 md:gap-10 md:my-5">
                <div className="rounded   px-5">
                    <h1 className="text-3xl mb-2 font-medium">Welcome Back!</h1>
                    <p className="text-sm mb-5">Enter your credentials to unlock your account.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 mb-3">
                            <input type="email" name="email" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Email or Phone" />
                            <div className="relative">
                                <input name="password" className="w-full focus:border-blue-500  text-base outline-none border p-3 rounded" type={visibility ? 'text' : 'password'} placeholder="Password" />
                                <p onClick={() => setVisibility(!visibility)} className="absolute cursor-pointer font-semibold hover:text-blue-300 text-blue-500 right-5  bottom-3">{visibility ? 'hide' : 'show'}</p>
                            </div>

                        </div>
                        <p className="font-semibold text-blue-400">Forgot password?</p>
                        <button className="mt-5 w-full mb-2 border rounded-full py-3 bg-blue-400 text-white font-semibold hover:bg-blue-600">{loading ? <span className="loading loading-ball loading-xs"></span> : 'Sign in'}</button>
                    </form>
                    <div className="flex items-center py-1 justify-between mb-2">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-600">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <p className="text-xs mb-3">By clicking Continue, you agree to Task Manager’s <span className="font-semibold text-blue-400">User  Agreement</span>, <span className="font-semibold text-blue-400">Privacy Policy</span>, and <span className="font-semibold text-blue-400">Cookie Policy</span>.</p>
                    <button onClick={handleGoogle} className="w-full font-medium border py-3 rounded-full flex hover:bg-slate-50 justify-center items-center gap-3">  <p>Continue with Google</p></button>
                </div>
                <div>
                    <p>New to Task Manager? <Link onClick={() => { setShowLogin(false) }}><span className="text-blue-500 cursor-pointer font-semibold">Join now</span></Link> </p>
                </div>


            </div>
        </>
    );
};

export default Login;
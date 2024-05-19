import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    }, [])

    const handlesubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(email, pass);
    }

    const  handleCaptcha = () =>{
        const value = captchaRef.current.value;
        console.log(value);
        if(validateCaptcha(value)){
            setDisable(false)
        } else{
            setDisable(true)
        }
    }
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="max-w-3xl border border-gray-400">
                <form onSubmit={handlesubmit} className="p-20">
                    <h1 className="text-4xl font-bold mb-8">Login</h1>
                    <div>
                        <p className="font-semibold">Email</p>
                        <input className="border px-4 py-2" name="email" type="email" placeholder="type here" />
                        <p className="font-semibold mt-5">Password</p>
                        <input className="border px-4 py-2" name="pass" type="password" placeholder="type here" />
                    </div>
                    <div className='mt-5'>
                    <LoadCanvasTemplate />
                    <input ref={captchaRef} className="border px-4 py-2" name="captcha" type="text" placeholder="type the text above" />
                    <button onClick={handleCaptcha} className="mt-3 rounded-none bg-slate-500 py-2">Validate</button>
                    </div>
                    <button disabled={disable} className="mt-10 w-full rounded-none bg-slate-500 py-2">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

const Login = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="max-w-3xl border border-gray-400">
                <div className="p-20">
                    <h1 className="text-4xl font-bold mb-8">Login</h1>
                    <div>
                        <p className="font-semibold">Email</p>
                        <input className="border px-4 py-2" type="email" placeholder="type here" />
                        <p className="font-semibold mt-5">Password</p>
                        <input className="border px-4 py-2" type="password" placeholder="type here" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
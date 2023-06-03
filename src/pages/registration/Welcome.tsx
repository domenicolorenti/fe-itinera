const Welcome = (props: any) => {
    return (
        <div className="flex flex-col p-8 lg:w-3/4 xl:w-2/3">
            <h1 className="text-gray-800 text-2xl text-center">Welcome in</h1>
            <img className="" src={require("../../res/logo.png")} alt="" />
            <div id="form" className="flex justify-center p-4">
                <h1 className="text-gray-800 text-right my-auto mx-4">Continue to</h1>
                <button onClick={() => props.navigate("/login")} className="bg-gray-800 text-white text-lg rounded-xl p-3 focus:outline-none">Log In</button>
            </div>
        </div>
    )
}

export default Welcome;
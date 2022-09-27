const registerDetails = () => (
    <>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col shadow-lg bg-white w-1/3 px-5">
                <p className="mt-20 ">Please provide us with your basic details</p>
                <div className="py-4">
                    <input
                        className="border w-full h-10 border-gray-400"
                        type="text"
                        placeholder="Enter Full Name.."
                        required
                    />
                </div>
                <div className="py-4">
                    <input
                        className="border w-full h-10 border-gray-400"
                        type="email"
                        placeholder="Enter Email.."
                        required
                    />
                </div>

                <div className="py-4">
                    <input
                        className="border w-full h-10 border-gray-400"
                        type="date"
                        placeholder="Enter DOB.."
                        required
                    />
                </div>

                <div className="py-4">
                    <input
                        className="border w-full h-10 border-gray-400"
                        type="text"
                        placeholder="Enter Section.."
                        required
                    />
                </div>

                <div className="py-4">
                    <input
                        className="border w-full h-10 border-gray-400"
                        type="text"
                        placeholder="Enter Division.."
                        required
                    />
                </div>

                <div className="py-4">
                    <input
                        className="border w-full h-10 border-gray-400"
                        type="password"
                        placeholder="Enter Password.."
                        required
                    />
                </div>
                <button className="bg-orange-400 h-10" type="submit">
                    Next
                </button>
            </div>
        </form>
    </>
);

export default registerDetails;

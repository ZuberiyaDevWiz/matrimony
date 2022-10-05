import Image from 'next/image';

const WhyUs = () => (
    <section>
        <div className="flex bg-[#e4e4e4] w-full h-96 divide-x-[2px] d divide-[#a50000]">
            <div className="flex flex-col text-center items-center justify-evenly bg-white w-[25%] h-[75%] my-auto  ml-20 mr-10 rounded-xl content-around ">
                <h6 className="font-semibold text-[16px] pt-2 px-6">
                    Our Strategy & Process To Find Better Match For You
                </h6>
                <h6 className="font-normal text-[16px] px-6">
                    Just follow 3 easy steps to get connected with Thousands of genuine profiles.
                </h6>
                <button
                    type="button"
                    className="bg-[#a50000] text-white font-semibold text-xs px-4 py-2 rounded-lg mx-auto justify-evenly"
                >
                    GET STARTED NOW
                </button>
            </div>
            <div className="flex items-center justify-around my-8 w-[75%]">
                <div className="w-24 h-24 divide-x-2 rounded-full shadow-2xl bg-white">
                    <div className="p-5 pt-6 ">
                        <Image
                            src="/icons/icon-1.png"
                            alt="strategy image two"
                            width="60px"
                            height="60px"
                        />
                    </div>
                </div>
                <div className="w-24 h-24 rounded-full shadow-2xl bg-white">
                    <div className="p-5">
                        <Image
                            src="/icons/icon-2.png"
                            alt="strategy image two"
                            width="60px"
                            height="60px"
                        />
                    </div>
                </div>
                <div className="w-24 h-24 rounded-full shadow-2xl bg-white">
                    <div className="p-5 ">
                        <Image
                            src="/icons/icon-2.png"
                            alt="strategy image two"
                            width="60px"
                            height="60px"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="h-96">
            <h1>helo</h1>
        </div>
    </section>
);
export default WhyUs;

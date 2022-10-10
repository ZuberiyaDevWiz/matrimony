import React from 'react';

// eslint-disable-next-line arrow-body-style
const FeaturedProfiles = () => {
    return (
        <section>
            <div className="pt-5 space-y-8">
                <div>
                    <h2 className="font-bold text-[34px] tracking-wide text-secondary-text text-center">
                        Featured Profiles
                    </h2>
                    <h5 className="font-semibold text-xl underline underline-offset-4  text-secondary-text text-center">
                        Over Thousands of Premium Members Looking for Soulmate
                    </h5>
                </div>
                <div className="main flex border w-fit justify-center mx-auto  m-4 select-none">
                    <div className="title py-3 my-auto px-5 bg-primary-background text-white text-sm font-semibold mr-3">
                        Looking For
                    </div>
                    <label className="flex radio p-2 cursor-pointer">
                        <input
                            className="my-auto transform scale-125 accent-primary-background"
                            type="radio"
                            name="radio"
                        />
                        <div className="title px-2">Bride</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                        <input
                            className="my-auto transform scale-125 accent-primary-background"
                            type="radio"
                            name="radio"
                        />
                        <div className="title px-2">Groom</div>
                    </label>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProfiles;

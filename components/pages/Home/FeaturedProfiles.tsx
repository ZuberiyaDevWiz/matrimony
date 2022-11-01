import { useState, FC } from 'react';
import FeaturedCard from 'components/common/Slider/FeaturedCard';
import { FeaturedCardDetails } from 'constants/FeaturedCardDetails';
import { FeaturedCardMenDetails } from 'constants/FeaturedCardMenDetails';
import Button from 'components/Form/Button';

const FeaturedProfiles: FC = () => {
    const [show, setShow] = useState(true);

    return (
        <section className="mb-14">
            <div className="pt-10 space-y-8">
                <div>
                    <h2 className="font-bold text-[34px] tracking-wide text-secondary-text text-center">
                        Featured Profiles
                    </h2>
                    <h5 className="font-semibold text-xl underline underline-offset-4  text-secondary-text text-center">
                        Over Thousands of Premium Members Looking for Soulmate
                    </h5>
                </div>
                <div>
                    <div className="main flex border w-fit justify-center mx-auto  m-4 select-none">
                        <div className="title py-3 my-auto px-5 bg-primary-background text-white text-sm font-semibold mr-3">
                            Looking For
                        </div>
                        <label className="flex radio p-2 cursor-pointer">
                            <input
                                className="my-auto transform scale-125 accent-primary-background"
                                type="radio"
                                name="radio"
                                checked={show}
                                onChange={(e) => {
                                    if (e.target.checked) setShow(true);
                                }}
                            />
                            <div className="title px-2">Bride</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                            <input
                                className="my-auto transform scale-125 accent-primary-background"
                                type="radio"
                                name="radio"
                                checked={!show}
                                onChange={(e) => {
                                    if (e.target.checked) setShow(false);
                                }}
                            />
                            <div className="title px-2">Groom</div>
                        </label>
                    </div>
                </div>
            </div>

            {show ? (
                <>
                    <div className="my-6 mx-10">
                        <FeaturedCard couplesCard={FeaturedCardMenDetails} slidesPerView={4} />
                    </div>
                </>
            ) : (
                <>
                    <div className="my-6 mx-10">
                        <FeaturedCard couplesCard={FeaturedCardDetails} slidesPerView={4} />
                    </div>
                </>
            )}

            <div className="text-primary-text w-fit font-semibold mx-auto">
                <Button text="SignUp to View More" color="one" rounded additionalStyles="px-4" />
            </div>
        </section>
    );
};

export default FeaturedProfiles;

import { FC } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper';
import CoupleStoriesCard, { CoupleStoriesProps } from "../CoupleStories";

interface SliderProps {
    couples: Array<CoupleStoriesProps>
    slidesPerView: number;
}

const Slider:FC<SliderProps> = (props) => {
    const { couples, slidesPerView } = props;
    return(
        <section>
            <div>
            <Swiper
                    className=" tw-p-5 tw-rounded-b-md tw-rounded-tr-md  "
                    modules={[Navigation]}
                    navigation
                    draggable
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {couples.map((couple) => (
                        <SwiperSlide key={couple.title}>
                            <CoupleStoriesCard
                                title={couple.title}
                                img={couple.img}
                                message={couple.message}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Slider
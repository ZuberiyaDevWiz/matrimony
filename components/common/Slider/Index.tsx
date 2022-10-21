/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import CoupleStoriesCard, { CoupleStoriesProps } from '../CoupleStories';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';

interface SliderProps {
    couples: Array<CoupleStoriesProps>;
    slidesPerView: number;
}

const Slider: FC<SliderProps> = (props) => {
    const { couples, slidesPerView } = props;
    return (
        <section>
            <div>
                <Swiper
                    className=" p-10  rounded-b-md rounded-tr-md  "
                    modules={[Navigation]}
                    draggable
                    navigation
                    slidesPerView={4}
                    spaceBetween={80}
                >
                    <div>
                        {couples.map((couple) => (
                            <SwiperSlide key={couple.title}>
                                <CoupleStoriesCard
                                    title={couple.title}
                                    img={couple.img}
                                    message={couple.message}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SpecialServices, { SpecialServicesProps } from '../SpecialServices';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';

interface ServiceProps {
    services: Array<SpecialServicesProps>;
    slidesPerView: number;
}

const SpecialServiceCard: FC<ServiceProps> = (props) => {
    const { services, slidesPerView } = props;
    return (
        <section>
            <div>
                <Swiper
                    className=" p-10 rounded-b-md rounded-tr-md  "
                    modules={[Navigation]}
                    draggable
                    navigation
                    spaceBetween={70}
                    breakpoints={{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        '2560': {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <div className="">
                        {services.map((service) => (
                            <SwiperSlide key={service.title}>
                                <SpecialServices title={service.title} img={service.img} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default SpecialServiceCard;

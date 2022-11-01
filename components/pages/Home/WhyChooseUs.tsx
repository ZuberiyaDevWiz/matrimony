import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => (
    <section>
        <div className="w-full relative h-[450px]">
            <Image
                src="/images/img-1.jpeg"
                layout="fill"
                className="absolute object-cover"
                alt="why choose us picture"
            />
            <div className="absolute bg-[#a50000] w-[40vw] h-full flex flex-col items-center text-white text-center py-8">
                <p className="font-semibold text-2xl mx-auto ">Why Choose Us</p>
                <p className="font-light text-justify mx-16 my-8 h-fit">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
                <button type="button" className="text-white mx-auto">
                    Read More
                </button>
            </div>
        </div>
    </section>
);
export default WhyChooseUs;

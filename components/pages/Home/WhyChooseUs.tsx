import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => (
    <section>
        <figure className="lg:flex">
            <img
                src="/images/img-1.jpeg"
                className="w-full object-cover h-40 lg:w-2/4 lg:h-full lg:rounded-none mx-auto"
            />
            <blockquote className=" bg-red-600">
                <div className="xl:px-20 lg:px-5 p-3">
                    <p className="text-center xl:py-10 lg:py5 text-xl text-white font-bold">
                        Why Choose Us
                    </p>
                    <p className="text-justify lg:h-full text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="text-center lgLpy-5 xl:py-10">
                        <button type="button" className="text-white">
                            Read More
                        </button>
                    </div>
                </div>
            </blockquote>
        </figure>
    </section>
);
export default WhyChooseUs;

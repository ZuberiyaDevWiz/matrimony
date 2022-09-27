import Image from 'next/image';

const WhyChooseUs = () => (
    <section>
        <div className="w-[100%] mt-8 relative h-[80vh]">
            <Image
                src="/images/img-1.jpeg"
                layout="fill"
                className="absolute object-cover"
                alt="why choose us picture"
            />
            <div className="absolute bg-[#800000] w-[40vw] h-full text-white text-center pt-8">
                <h1 className="font-semibold text-[28px] pb-4">Why Choose Us ?</h1>
                <p className="w-[30vw] m-auto text-lg text-justify ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
            </div>
            <div className="absolute flex top-[85%] left-[17%]">
                <button type="button">Read More</button>
            </div>
        </div>
    </section>
);
export default WhyChooseUs;

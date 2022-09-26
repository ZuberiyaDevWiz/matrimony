import Image from 'next/image';

const WhyChooseUs = () => (
    <section>
        <div className="w-[100%] mt-20 relative h-[70vh] ">
            <Image
                src="/images/img-1.jpeg"
                layout="fill"
                className="absolute object-cover"
                alt="why choose us picture"
            />
            <div>
                <h1>Why Choose Us ?</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                </p>
            </div>
        </div>
    </section>
);
export default WhyChooseUs;

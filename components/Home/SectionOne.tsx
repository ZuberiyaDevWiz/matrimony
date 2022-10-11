import Image from 'next/image';
import Register from './Register';

const SectionOne = () => (
    <section>
        <div className="relative h-fit">
            <div className="h-screen">
                <Image
                    src="/images/img-3.jpeg"
                    layout="fill"
                    className="absolute object-cover "
                    alt="section one picture"
                />
                <div className="absolute mt-[5%] ml-10 ">
                    <Register />
                </div>
            </div>
        </div>
    </section>
);
export default SectionOne;

import Image from 'next/image';
import Register from 'pages/Register/register';

const SectionOne = () => (
    <section>
        <div className="relative">
            <div className="h-screen">
                <Image
                    src="/images/img-3.jpeg"
                    layout="fill"
                    className="absolute object-cover "
                    alt="section one picture"
                />
                <div className="absolute mt-14 ml-10 ">
                    <Register />
                </div>
            </div>
        </div>
    </section>
);
export default SectionOne;

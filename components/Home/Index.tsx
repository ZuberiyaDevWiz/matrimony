import SectionOne from './SectionOne';
import WhyUs from './whyUs';
import WhyChooseUs from './whyChooseUs';

const Home = () => (
    <section>
        <div className='h-full w-full'>
            <SectionOne />
            <WhyChooseUs />
            <WhyUs />
        </div>
    </section>
);

export default Home;

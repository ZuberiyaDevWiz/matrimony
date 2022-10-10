import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import WhyUs from './whyUs';
import WhyChooseUs from './whyChooseUs';

const Home = () => (
    <section>
        <div className="h-full w-full">
            <SectionOne />
            <SectionTwo />
            <WhyChooseUs />
            <WhyUs />
        </div>
    </section>
);

export default Home;

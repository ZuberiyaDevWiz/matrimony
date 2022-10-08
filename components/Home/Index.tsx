import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import WhyUs from './WhyUs';
import WhyChooseUs from './WhyChooseUs';

const Home = () => (
    <section>
        <div className="h-full w-full">
            <SectionOne />
            <SectionTwo/>
            <WhyChooseUs />
            <WhyUs />
        </div>
    </section>
);

export default Home;

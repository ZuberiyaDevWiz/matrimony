import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import WhyChooseUs from './WhyChooseUs';
import WhyUs from './WhyUs';
import FeaturedProfiles from './FeaturedProfiles';

const Home = () => (
    <section>
        <div className="h-full w-full">
            <SectionOne />
            <SectionTwo />
            <WhyChooseUs />
            <FeaturedProfiles />
            <WhyUs />
        </div>
    </section>
);

export default Home;

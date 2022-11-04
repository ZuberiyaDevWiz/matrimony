import SectionOne from 'components/pages/home/SectionOne';
import SectionTwo from 'components/pages/home/SectionTwo';
import WhyChooseUs from 'components/pages/home/WhyChooseUs';
import FeaturedProfiles from 'components/pages/home/FeaturedProfiles';
import SpecialService from 'components/pages/home/SpecialService';
import WhyUs from 'components/pages/home/WhyUs';

const Home = () => (
    <section>
        <SectionOne />

        <SectionTwo />
        <WhyChooseUs />
        <FeaturedProfiles />

        <WhyUs />
        <SpecialService />
    </section>
);

export default Home;

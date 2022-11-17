import SectionOne from 'components/pages/Home/SectionOne';
import SectionTwo from 'components/pages/Home/SectionTwo';
import WhyChooseUs from 'components/pages/Home/WhyChooseUs';
import FeaturedProfiles from 'components/pages/Home/FeaturedProfiles';
import SpecialService from 'components/pages/Home/SpecialService';
import WhyUs from 'components/pages/Home/WhyUs';

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

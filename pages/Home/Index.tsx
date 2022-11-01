import WhyUs from 'components/pages/Home/WhyUs';
import WhyChooseUs from 'components/pages/Home/WhyChooseUs';
import SectionOne from 'components/pages/Home/SectionOne';
import SectionTwo from 'components/pages/Home/SectionTwo';
import FeaturedProfiles from 'components/pages/Home/FeaturedProfiles';
import SpecialService from 'components/pages/Home/SpecialService';

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

import WhyUs from 'components/pages/Home/WhyUs';
import WhyChooseUs from 'components/pages/Home/WhyChooseUs';
import Register from 'components/pages/Home/Register';
import SectionOne from 'components/pages/Home/SectionOne';
import SectionTwo from 'components/pages/Home/SectionTwo';

const Home = () => (
    <section>
        <Register />
        <SectionOne />
        <WhyChooseUs />
        <SectionTwo />
        <WhyUs />
    </section>
);

export default Home;

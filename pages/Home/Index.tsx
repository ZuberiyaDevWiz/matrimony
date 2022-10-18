import WhyUs from 'components/Home/WhyUs';
import WhyChooseUs from 'components/Home/WhyChooseUs';
import Register from 'components/Home/Register';
import SectionOne from 'components/Home/SectionOne';
import SectionTwo from 'components/Home/SectionTwo';

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

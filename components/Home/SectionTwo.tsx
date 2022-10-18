import Slider from 'components/common/Slider/Index';
import { CoupleCard } from 'Constant/CoupleCard';
// import { BsArrowLeftCircleFill } from 'react-icons/bs';

const SectionTwo = () => (
    <div className="mx-8">
        <div className="pt-5">
            <h2 className="font-bold text-[34px] tracking-wide text-secondary-text text-center">
                Success Stories
            </h2>
            <h5 className="font-semibold text-xl underline underline-offset-4  text-secondary-text text-center">
                Over Thousands of Success Stories
            </h5>
        </div>
        <div className="my-10">
            {/* <BsArrowLeftCircleFill /> */}
            <Slider slidesPerView={6} couples={CoupleCard} />
        </div>
    </div>
);

export default SectionTwo;

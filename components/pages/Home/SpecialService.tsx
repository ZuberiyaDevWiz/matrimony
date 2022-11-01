import SpecialServiceCard from 'components/common/Slider/SpecialServiceCard';
import { PurchaseCard } from 'constants/PurchaseCard';
// import { BsArrowLeftCircleFill } from 'react-icons/bs';

const SpecialService = () => (
    <div className="mb-14">
        <div className="mx-8">
            <div className="pt-10">
                <h2 className="font-bold text-[34px] tracking-wide text-secondary-text text-center">
                    Special Services
                </h2>
                <h5 className="font-semibold text-xl underline !underline-offset-4  text-secondary-text text-center">
                    Enjoy the Wedding Purchase with Us
                </h5>
            </div>
            <div className="my-10 ">
                {/* <BsArrowLeftCircleFill /> */}
                <SpecialServiceCard slidesPerView={4} services={PurchaseCard} />
            </div>
        </div>
    </div>
);

export default SpecialService;

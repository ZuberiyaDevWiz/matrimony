import BreifIntro from "./BreifIntro";
import PersonalDetails from "./PersonalDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import RegisterDetails from "./RegisterDetails";
import ReligionDetails from "./ReligionDetails";

const RegisterHome = () => (
    <section>
            <div>
                <BreifIntro/>
                <PersonalDetails/>
                <ProfessionalDetails/>
                <RegisterDetails/>
                <ReligionDetails/>
             
            </div>
        </section>
)

export default RegisterHome;
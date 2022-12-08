import { FC } from 'react';
import RegisterHome from 'components/pages/Register/Index';

const RegisterPage: FC = () => (
    <section className="relative h-[200vh]  ">
        <div className="bg-primary-background border-t-[1px] border-secondary-background text-2xl pl-10 md:pl-44 pt-6 tracking-wider font-bold text-primary-text h-40">
            Registration Process
        </div>
        <RegisterHome />
    </section>
);

export default RegisterPage;

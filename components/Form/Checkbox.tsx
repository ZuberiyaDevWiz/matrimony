import { FC } from 'react';

interface checkboxProps {
    name: string;
    label: string;
    options: Array<string>;
}

const CheckBox: FC<checkboxProps> = ({ name, label, options }) => (
    <div className="">
        {options.map((option) => (
            <div key={option}>
                <input type="checkbox" name={name} className="focus:box-border" />
                <label htmlFor={name}>{label}</label>
            </div>
        ))}
    </div>
);

export default CheckBox;

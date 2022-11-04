import { FC } from 'react';

interface checkboxProps {
    name: string;
    label: string;
    options: Array<string>;
}

const CheckBox: FC<checkboxProps> = ({ name, label, options }) => (
    <div className="">
        <label htmlFor={name}>{label}</label>
        {options.map((option) => (
            <div key={option}>
                <div className=" my-auto flex flex-row">
                    <input type="checkbox" name={name} className="focus:box-border" />
                    <span className="pl-2 ">{options}</span>
                </div>
            </div>
        ))}
    </div>
);

export default CheckBox;

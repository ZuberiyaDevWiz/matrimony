import { FC } from 'react';

interface checkboxProps {
    name: string;
    label: string;
    options: Array<string>;
}

const CheckBox: FC<checkboxProps> = ({ name, label, options }) => (
    <div className="mt-3">
        <label htmlFor={name}>{label}</label>
        {options.map((option) => (
            <div key={option}>
                <input type="checkbox" name={name} className="focus:box-border" />
            </div>
        ))}
    </div>
);

export default CheckBox;

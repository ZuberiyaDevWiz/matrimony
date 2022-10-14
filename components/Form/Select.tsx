import { FC } from 'react';

interface OptionProps {
    key: string;
    value: string;
}

interface SelectProps {
    name: string;
    label?: string;
    value?: string | number;
    options: Array<OptionProps>;
}

const Select: FC<SelectProps> = (props) => {
    const { name, label, value, options } = props;
    return (
        <div>
            <label htmlFor={name} className="font-medium text-sm pl-3 pb-2 ">
                {label}
            </label>

            <select
                value={value}
                id={name}
                className=" border-[1px] border-gray-500 text-black font-medium text-sm rounded-lg  block w-full h-10 px-3 focus:ring-0 "
            >
                {options.map((option) => (
                    <option key={option.key} value={option.key}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;

import { FC } from "react";

interface OptionProps {
    key: string;
    value: string;
}

interface SelectProps {
    name: string;
    label: string;
    value?: string | number;
    options: Array<OptionProps>;
}

const Select:FC<SelectProps> = (props) => {
    const { name, label, value, options } = props;  
    return (
        <div>
            <label
            htmlFor={name}
            className="block text-sm font-medium text-primary"
            >
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
            </label>
        </div>
    )
}

export default Select
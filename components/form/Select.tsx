/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import clx from 'utils/clx';

interface OptionProps {
    key: string;
    value: string;
}

interface SelectProps {
    name: string;
    label?: string;
    value?: string | number;
    options: Array<OptionProps>;
    additionalStyles?: string;
}

const select: FC<SelectProps> = (props) => {
    const { name, label, value, options, additionalStyles } = props;
    return (
        <div>
            <label htmlFor={name}>
                <p className="font-medium text-sm pl-3 py-2 ">{label}</p>
                <div>
                    <select
                        value={value}
                        id={name}
                        className={clx(
                            ' border-[1px] border-gray-500 text-black font-medium text-sm rounded-lg  block w-full h-10 px-3 focus:ring-0',
                            additionalStyles || null
                        )}
                    >
                        {options.map((option) => (
                            <option key={option.key} value={option.key}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                </div>
            </label>
        </div>
    );
};

export default select;

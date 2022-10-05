import clx from 'utils/clx';

import { FC, ChangeEvent } from 'react';

interface InputProps {
    name?: string;
    placeholder: string;
    changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
    type: 'text' | 'number' | 'email' | 'password' | 'date';
    value?: string | number;
    label: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    rounded: boolean;
    width?: string;
    height?: string;
}

const Input: FC<InputProps> = (props) => {
    const {
        name,
        type,
        changeHandler,
        placeholder,
        value,
        label,
        required,
        minLength,
        maxLength,
        rounded,
        width,
        height,
    } = props;
    return (
        <div>
            <label htmlFor={name}>
                <p className="font-medium text-sm px-2">{label}</p>
                <div className="">
                    <input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        required={required}
                        minLength={minLength}
                        maxLength={maxLength}
                        onChange={changeHandler}
                        width={width}
                        height={height}
                        className={clx(
                            'w-full  pl-3 border-[1px] border-gray-500',
                            rounded ? '!rounded-md' : '!rounded'
                        )}
                    />
                </div>
            </label>
        </div>
    );
};

export default Input;

import clx from 'utils/clx';

import { FC, ChangeEvent } from 'react';

interface InputProps {
    name?: string;
    placeholder: string;
    changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number' | 'email' | 'password' | 'date' | string;
    value?: string | number;
    label: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    rounded: boolean;
    width?: string;
    height?: string;
    additionalStyles?: string;
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
        additionalStyles,
    } = props;
    return (
        <div>
            <label htmlFor={name}>
                <p className="font-medium text-sm pl-3 py-2 ">{label}</p>
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
                            'w-full h-10 pl-3 border-[1px] border-gray-500 text-black text-sm',
                            rounded ? '!rounded-md' : '!rounded',
                            additionalStyles || null
                        )}
                    />
                </div>
            </label>
        </div>
    );
};

export default Input;

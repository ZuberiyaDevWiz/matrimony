import { FC } from 'react';
import clx from 'utils/clx';

interface RadioProps {
    name: string;
    label?: string;
    value?: string;
    options: Array<string>;
    additionalStyles?: string;
}

const Radio: FC<RadioProps> = (props) => {
    const { label, options, name, value, additionalStyles } = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div className="tw-p-2 space-x-4 flex tw-space-y-2">
                {options.map((option) => (
                    <div key={option}>
                        <input
                            type="radio"
                            name={name}
                            value={value}
                            className="focus:tw-ring-0 "
                        />
                        <span className={clx('tw-pl-2 tw-text-sm', additionalStyles || null)}>
                            {option}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Radio;

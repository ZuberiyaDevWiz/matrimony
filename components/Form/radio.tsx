import { FC } from 'react';

interface RadioProps {
    name: string;
    label: string;
    value?: string;
    options: Array<string>;
}

const Radio: FC<RadioProps> = (props) => {
    const { label, options, name, value } = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div className="tw-p-2 tw-space-y-2">
                {options.map((option) => (
                    <div key={option}>
                        <input type="radio" name={name} value={value} className="focus:tw-ring-0" />
                        <span className="tw-pl-2 tw-text-sm">{option}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Radio;

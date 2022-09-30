import clx from 'utils/clx';

interface ButtonProps {
    text: string;
    color: string;
    rounded: boolean;
    onClick?: () => void;
    submit?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { text, color, rounded, onClick, submit } = props;
    return (
        <button
            color={color}
            onClick={onClick}
            type={submit ? 'submit' : 'button'}
            className={clx(
                'w-full py-2 border-[1px]  text-sm border-gray-500 ',
                rounded ? '!rounded-full' : '!rounded '
            )}
        >
            <span>{text}</span>
        </button>
    );
};

export default Button;

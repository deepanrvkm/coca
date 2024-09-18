import Link from 'next/link';

const Button = ({ label, href, icon }) => {
    return (
        <Link
            href={href}
            className="btn relative bg-[#FF5C00] text-white hover:bg-[#e35500] font-medium py-3 px-6 pr-16 rounded-full inline-flex items-center justify-center h-[56px]"
        >
            {label}
            <span className="absolute right-[8px] bg-white text-[#FF5C00] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                {icon}
            </span>
        </Link>
    );
};

export default Button;

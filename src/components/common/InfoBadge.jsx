import Image from 'next/image';

const InfoBadge = ({ iconSrc, altText, text, bgColor = 'bg-white', textColor = 'text-black' }) => {
    return (
        <div className={`flex items-center mb-4 ${bgColor} rounded-full px-6 pl-2 py-2 w-fit`}>
            <Image src={iconSrc} alt={altText} width={32} height={32} className="mr-2" />
            <span className={`font-medium ${textColor}`}>{text}</span>
        </div>
    );
};

export default InfoBadge;


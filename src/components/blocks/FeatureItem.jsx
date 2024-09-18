import Image from 'next/image';

const FeatureItem = ({ icon, title, description }) => (
    <div className="flex flex-col mb-2">
        <Image src={icon} alt={title} className="w-14 h-14 mb-6" />
        <h4 className="text-2xl font-medium text-[#19191C] pb-2">{title}</h4>
        <p className="text-sm text-[#4D4E57] text-[16px] leading-[24px]">{description}</p>
    </div>
);

export default FeatureItem;
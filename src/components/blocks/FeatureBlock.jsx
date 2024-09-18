import Link from 'next/link';

const FeatureBlock = ({ imageOnLeft, title, description }) => (
    <div className="flex flex-wrap md:flex-nowrap items-stretch bg-[#f8f9fd] px-6 py-10 rounded-lg mb-[62px]">
        <div
            className={`flex-shrink-0 w-full md:w-[43%] h-[350px] bg-[#e2e2e2] border-[8px] border-[#2c2a2f] rounded-[24px] overflow-hidden ${imageOnLeft ? '' : 'md:order-2'
                }`}
        ></div>
        <div className={`${imageOnLeft ? 'md:pl-8 lg:pl-16' : 'md:pr-6'} mt-4 md:mt-0 flex-1 flex flex-col justify-between`}>
            <div>
                <h4 className="mb-2 text-2xl md:text-3xl font-medium text-[#19191C]">{title}</h4>
                <p className="mb-6 text-lg text-[#4D4E57]">{description}</p>
            </div>
            <div className="flex space-x-4 mt-auto">
                <Link href="#" className="btn active">
                    Launch Demo
                </Link>
                <Link href="#" className="btn btn-outline">
                    More Info
                </Link>
            </div>
        </div>
    </div>
);

export default FeatureBlock;
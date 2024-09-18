const Testimonial = ({ bgColor, textColor, quote, name, position, iconBgColor }) => (
    <div className={`${bgColor} p-6 rounded-lg flex-1`}>
        <p className={`${textColor} text-[24px] leading-8 font-medium mb-4`}>{quote}</p>
        <div className="flex items-center space-x-4">
            <div className={`w-14 h-14 ${iconBgColor} rounded-full`}></div>
            <div>
                <p className={`text-[18px] font-medium ${textColor}`}>{name}</p>
                <p className={`text-[16px] ${textColor}`}>{position}</p>
            </div>
        </div>
    </div>
);

export default Testimonial;
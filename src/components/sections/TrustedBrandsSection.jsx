import Image from 'next/image';
import { Brand1, Brand2, Brand3, Brand4, Brand5, Brand6 } from '@/assets/images';

const TrustedBrandsSection = () => {
    const brands = [
        { src: Brand1, alt: 'KFC' },
        { src: Brand2, alt: 'Pizza Hut' },
        { src: Brand3, alt: 'McDonald\'s' },
        { src: Brand4, alt: 'Starbucks' },
        { src: Brand5, alt: 'Burger King' },
        { src: Brand6, alt: 'Other Brand' },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto text-center">
                <p className="text-lg font-medium text-[#19191C] mb-6">
                    Trusted by over 50 thousand restaurants in 10+ countries
                </p>
                <div className="flex flex-wrap justify-around items-center">
                    {brands.map((brand, index) => (
                        <Image
                            key={index}
                            src={brand.src}
                            alt={brand.alt}
                            className="w-10 md:w-16 object-contain mx-2"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBrandsSection;
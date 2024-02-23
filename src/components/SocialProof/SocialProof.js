import React from 'react';
import Image from 'next/image';

// Placeholder logo imports - replace these with your actual logo imports
import LogoChampion from 'public/images/svg/champion.svg';
import LogoChanel from 'public/images/svg/chanel.svg';
import LogoEcco from 'public/images/svg/ecco.svg';
import LogoLevi from 'public/images/svg/levi.svg';
import LogoHugo from 'public/images/svg/hugo.svg';
import LogoLacoste from 'public/images/svg/lacoste.svg';
import LogoGucci from 'public/images/svg/gucci.svg';
import LogoFila from 'public/images/svg/fila.svg';
import LogoDolce from 'public/images/svg/dolce.svg';
import LogoAdidas from 'public/images/svg/adidas.svg';
import LogoNike from 'public/images/svg/nike.svg';

const SocialProof = () => {
    const brandLogos = [
        { src: LogoChampion, alt: 'Champion' },
        { src: LogoChanel, alt: 'Chanel' },
        { src: LogoEcco, alt: 'Ecco' },
        { src: LogoLevi, alt: 'Levi' },
        { src: LogoHugo, alt: 'Hugo Boss' },
        { src: LogoLacoste, alt: 'Lacoste' },
        { src: LogoGucci, alt: 'Gucci' },
        { src: LogoFila, alt: 'Fila' },
        { src: LogoDolce, alt: 'Dolce & Gabbana' },
        { src: LogoAdidas, alt: 'Adidas' },
        { src: LogoNike, alt: 'Nike' },
    ];


    return (
        <div className="text-gray-600 py-12 mt-32 mx-auto" style={{ maxWidth: '1200px' }}>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-2">Our Esteemed Partners</h2>
                <p className="text-xl font-semibold mb-6">We are proud to collaborate with these leading brands.</p>
                <div className="flex overflow-x-auto py-4">
                    <div className="flex flex-nowrap gap-32 animate-slide">
                        {brandLogos.map((logo, index) => (
                            <div key={index} className="inline-block text-center">
                                <Image src={logo.src} alt={logo.alt} width={75} height={75} objectFit="contain" />
                                <p className="text-xl font-bold mt-2">{logo.alt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
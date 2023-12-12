import Image from "next/image";
import heroDesktop from "../../../public/images/hero-desktop.jpg";

import DescriptionDesktop from "./description-desktop";

function CardDesktop() {
    return (
        <div className="flex gap-36 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/images/bg-pattern-desktop.svg')" }}>
            <DescriptionDesktop />
    
            <Image src={heroDesktop} alt="hero desktop" className="h-[650px] w-fit" />
        </div>
    );
}

export default CardDesktop;
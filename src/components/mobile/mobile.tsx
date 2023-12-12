import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import heroMobile from "../../../public/images/hero-mobile.jpg";

import DescriptionMobile from "./description-mobile";

function MobileComponent() {
    return (
        <div className="flex justify-center">
            <div className="w-[375px]">
                <Image src={logo} alt="logo" className="w-24 mx-10 my-6 self-start" />
                <Image src={heroMobile} alt="hero mobile" />
                <DescriptionMobile />
            </div>
        </div>
    );
}

export default MobileComponent;

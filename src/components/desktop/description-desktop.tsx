import Image from "next/image";
import logo from "../../../public/images/logo.svg";

import InputDesktop from "./input-desktop";
import TextDesktop from "./text-desktop";
import TitleDesktop from "./title-desktop";

function DescriptionDesktop() {
    return (
        <div className="flex flex-col gap-20 pt-12 pl-24 " >
            <Image src={logo} alt="logo" />
            <div className="flex flex-col gap-5">
                <TitleDesktop />
                
                <TextDesktop />

                <InputDesktop />
            </div>
        </div>
    );
}

export default DescriptionDesktop;
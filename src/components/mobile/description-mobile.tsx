import InputMobile from "./input-mobile";
import TitleTextMobile from "./title-text-mobile";

function DescriptionMobile() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 my-12">
            <TitleTextMobile />
            
            <InputMobile />
        </div>
    );
}

export default DescriptionMobile;
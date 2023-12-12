import Image from "next/image";
import arrow from "../../../public/images/icon-arrow.svg";
import error from "../../../public/images/icon-error.svg";
import { useState } from "react";

function InputMobile() {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [validationMessage, setValidationMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleNextClick = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setIsValidEmail(isValid);

        if (isValid) {
            setValidationMessage('Valid email');

        } else {
            setValidationMessage('Please provide a valid email');
        }
    };

    return (
        <div>
            <div className={`flex items-center justify-between rounded-3xl border-[0.5px] border-Desaturated-Red ${isValidEmail ? 'border-Desaturated-Red' : 'border-Soft-Red border-2'}`}>
                <input
                    className="pl-5 pr-10 pt-[2px] w-[16rem] rounded-3xl text-black text-sm font-light placeholder:text-Desaturated-Red focus:outline-none"
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleInputChange}
                />
                <button className="relative flex items-center px-6 py-3 rounded-3xl bg-gradient-to-br from-from-button to-to-button " onClick={handleNextClick}>
                    <Image src={error} alt="a" className={`${isValidEmail ? 'hidden' : ''} absolute left-[-35px] `} />
                    <Image src={arrow} alt="arrow" />
                </button>
            </div>
            {validationMessage && (
                <p className={`${isValidEmail ? 'text-green-500' : 'text-Soft-Red'}  px-5 text-xs py-2`}>
                    {validationMessage}
                </p>
            )}
        </div>
    );
}

export default InputMobile;
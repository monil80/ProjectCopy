import React, { useState, useEffect } from "react";
import companylogo from "../images/InfiniteAI Logo with Text White v5 1.png";
import { useNavigate } from "react-router-dom";
import OTPInputField from "../components/OTPInputfield";

const Otp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [otpValues, setOTPValues] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
  });

  const otpInputRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const contents = [
    "InfiniteAI is one of the leading technology consulting organization providing innovative solutions to its customers.",
    "nfiniteAI is oneing technology consulting organization providing innovative solutions to its customers.",
    "nfiniteAI is one of the leading technolong organization providing innovative solutions to its customers.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000);

    otpInputRefs[0].current.focus();

    setTimeout(() => {
      setButtonDisabled(false); // Enable the button after 5 seconds
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const isFilled = Object.values(otpValues).every((value) => value !== "");
    setSubmitDisabled(!isFilled);
  }, [otpValues]);

  const handleDotHover = (index) => {
    setCurrentIndex(index);
  };

  const handleOTPChange = (e, currentInputIndex) => {
    const { value } = e.target;
  
    setOTPValues({ ...otpValues, [`otp${currentInputIndex + 1}`]: value });
  
    if (value.length === 1 && currentInputIndex < 4) {
      otpInputRefs[currentInputIndex + 1].current.focus();
    } else if (value.length === 0 && currentInputIndex > 0) {
      otpInputRefs[currentInputIndex - 1].current.focus();
    }
  };
  
  
  
  

  const handleClick = () => {
    if (!buttonDisabled) {
      setShowMessage(true);
      setButtonDisabled(true);

      setTimeout(() => {
        setShowMessage(false);
        setTimeout(() => {
          setButtonDisabled(false);
        }, 5000);
      }, 2000);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full h-[100vh] bg-[#1D1D1D] lg:bg-white">
        <div className="black-container lg:flex  lg:bg-[#1D1D1D] rounded-[10px] justify-around items-center lg:w-[950px] lg:h-[500px] shadow-md">
          <div className="left-content mx-12 my-9">
            <div className="img-text flex justify-center items-center flex-col lg:block">
              <img
                src={companylogo}
                className="w-[150px] h-5 "
                alt="error-logo"
              />
              <p className="font-medium text-[#B8B8B8] text-sm">
                TECHNOLOGY PVT. LTD.
              </p>
            </div>

            <div className="hidden lg:block carousel-heading font-monster font-semibold text-white text-[22px] mt-12 w-[389px] h-[54px] tracking-wider">
              Welcome to CAssist,
              <br />
              AI based Business Compliance
            </div>
            <div className="hidden lg:block carousel-content font-monster font-normal text-[#B8B8B8] text-xs mt-12 w-[272px]">
              {contents[currentIndex]}
            </div>

            <div className="hidden  dots lg:flex lg:justify-between w-10  mt-14 ml-36 ">
              <div
                className={`1 text-[#B8B8B8] text-lg cursor-pointer hover:text-white ${
                  currentIndex === 0 ? "text-white" : ""
                }`}
                onMouseEnter={() => handleDotHover(0)}
              >
                &#8226;
              </div>
              <div
                className={`2 text-[#B8B8B8] text-lg cursor-pointer hover:text-white ${
                  currentIndex === 1 ? "text-white" : ""
                }`}
                onMouseEnter={() => handleDotHover(1)}
              >
                &#8226;
              </div>
              <div
                className={`3 text-[#B8B8B8] text-lg cursor-pointer hover:text-white ${
                  currentIndex === 2 ? "text-white" : ""
                }`}
                onMouseEnter={() => handleDotHover(2)}
              >
                &#8226;
              </div>
            </div>

            <div className="hidden lg:block contacts font-normal text-xs text-white font-monster mt-14">
              <p>Talk to Us</p>
              <p>hello@infiniteai.io | +91 9890 290 778 | infiniteai.io</p>
            </div>
          </div>

          <div className="right-content bg-white w-[352px] h-[380px] lg:h-[430px] rounded-[10px] ">
            <div className="heading font-[600] font-roboto text-[26px] my-5 mx-10 ">
              OTP
            </div>

            <div className="content font-medium font-monster text-xs  my-4 mx-10">
              <p className="font-poppins text-sm font-normal tracking-wide">
                Enter your OTP to proceed
              </p>
            </div>

            <form className="my-12 mx-9">
              <div className="input-container  w-[270px]  lg:my-[68px]">
                <div className="flex justify-around">
                  {Object.keys(otpValues).map((key, index) => (
                    <OTPInputField
                      key={key}
                      ref={otpInputRefs[index % otpInputRefs.length]}
                      value={otpValues[key]}
                      onChange={(e) => handleOTPChange(e, index)}
                    />
                  ))}
                </div>
                {showMessage && <p className="text-[#FF0000] font-bold font-monster text-xs text-center ">
              Please fill in all fields
            </p>}
              </div>

           

              <div className="resend-otp">
                <button
                  className={` mt-14 lg:mt-0 px-[86px] pt-1 lg:pt-0  font-semibold ${
                    buttonDisabled ? "text-gray-400 cursor-not-allowed" : ""
                  }`}
                  onClick={handleClick}
                  disabled={buttonDisabled}
                >
                  Resend Otp
                </button>
              </div>

              <button
                className={`w-[270px] h-[42px] rounded-[5px] bg-[#FF0000] mt-8 text-xs text-white font-medium font-monster mx-1 ${
                  submitDisabled ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                onClick={(e) => {
                  navigate("/dashboard");
                }}
                disabled={submitDisabled}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:hidden last text-sm font-normal font-poppins text-white my-6">
                <div className="div1">Talk to Us</div>
                <div className="2 py-[3px]">hello@infiniteai.io | infiniteai.io <br />
                +91 9890 290 778 </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

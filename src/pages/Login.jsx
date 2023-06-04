import React, { useState, useEffect, useRef } from "react";
import companylogo from "../images/InfiniteAI Logo with Text White v5 1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    mobileNumber: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const mobileNumberInputRef = useRef(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);


  const contents = [
    "InfiniteAI is one of the leading technology consulting organization providing innovative solutions to its customers.",
    "nfiniteAI is oneing technology consulting organization providing innovative solutions to its customers.",
    "nfiniteAI is one of the leading technolong organization providing innovative solutions to its customers.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    mobileNumberInputRef.current.focus();
  }, []);

  useEffect(() => {
    const isAnyFieldEmpty = state.mobileNumber.trim() === "";
    setIsButtonDisabled(isAnyFieldEmpty);
  }, [state]);

  const handleDotHover = (index) => {
    setCurrentIndex(index);
  };

  const handleClick = () => {
    if (!isButtonDisabled) {
      if (state.mobileNumber.includes("9")) {
        setShowErrorMessage(false);
        navigate("/otp");
      } else {
        setShowErrorMessage(true);
        setTimeout(() => {
          setShowErrorMessage(false);
        }, 3000);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full min-h-[100vh] bg-[#1D1D1D] lg:bg-white">
        <div className="black-container lg:flex  lg:bg-[#1D1D1D] rounded-[10px] justify-around items-center lg:w-[950px] lg:h-[500px] shadow-md">
          <div className="left-content mx-12 my-9">
            <div className="img-text flex justify-center items-center flex-col lg:block my-[-14px] lg:my-0">
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

            <div className="hidden  dots lg:flex lg:justify-between w-10  mt-14 ml-36">
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
            <div className="heading font-[600] mx-9 py-4 font-roboto text-[26px] lg:my-5 lg:mx-9 lg:py-0 tracking-tight">
              Login
            </div>

            <div className="content font-medium font-monster text-xs  my-4 mx-9">
              <p className="lg:hidden">Provide your details to get started</p>
              <p className=" hidden lg:block">
                Provide your details to get started Won’t be shared publicly. We
                will not spam you, Promise !
              </p>
            </div>

            <form className="mt-12 mx-9 ">
              <div className="input-container">
                <input
                  ref={mobileNumberInputRef}
                  className="w-[270px] h-[40px] rounded-[5px] border-2 border-solid border-[#B8B8B8] bg-[#F5F5F5] px-5 my-1 focus:outline-none"
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number i.e. 9786358925"
                  minLength={10}
                  value={state.mobileNumber}
                  maxLength={10}
                  onChange={(e) => {
                    setState({ ...state, mobileNumber: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (!/^[0-9]+$/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                />
                {showErrorMessage && <p className="text-[#FF0000] font-bold font-monster text-xs text-center">
              Please fill in all fields
            </p>}
              </div>

              <button
                className={`w-[270px] h-[42px] rounded-[5px] bg-[#FF0000] mt-8 text-xs text-white font-medium font-monster ${
                  isButtonDisabled || state.mobileNumber.length !==10 ? " cursor-not-allowed  bg-gray-400 text-black" : ""
                }`}
                disabled={isButtonDisabled}
                onClick={handleClick}
              >
                Get OTP
              </button>
            </form>

            <hr className="w-[312px] mt-16 mx-5" />

            <div className="links text-sm mx-10 mt-2 ">
              Not an User?&nbsp;
              <span
                className="text-[#FF0000] font-bold font-monster cursor-pointer"
                onClick={(e) => {
                  navigate("/");
                }}
              >
                Register Here
              </span>
            </div>
          </div>
        <div className="lg:hidden last text-sm font-normal font-poppins text-white mt-4">
                <div className="div1">Talk to Us</div>
                <div className="2">hello@infiniteai.io | infiniteai.io <br />
                +91 9890 290 778 </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

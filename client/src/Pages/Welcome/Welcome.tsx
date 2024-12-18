import React, { useEffect, useState } from "react";
import Root from "./Root";
import GetStarted from "./GetStarted";
import { useNavigate } from "react-router";
import SlideCard from "./SlideCard";
import illustration_1 from "../../assets/images/welcome_illustration_1.png";
import illustration_2 from "../../assets/images/welcome_illustration_2.png";
import illustration_3 from "../../assets/images/welcome_illustration_3.png";

interface WelcomePropsType {
  handleBoarded: () => void;
}

const Welcome: React.FC<WelcomePropsType> = ({ handleBoarded }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Automatically move from the logo slide to the get started slide after 3 seconds
  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => {
        setStep(2); // Move to "Get Started" slide
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [step]);

  const handleNext = () => {
    if (step === 5) {
      navigate("/"); // Redirect to home after the last step
    } else {
      setStep((prev) => prev + 1); // Move to the next step
    }
  };

  return (
    <>
      {/* Dynamic Styles with Keyframes */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .slideIn {
            opacity: 0;
            animation: slideIn 0.5s ease-out forwards, fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>

      <div className="robotoFlex slideIn">
        {step === 1 && <Root />}

        {step === 2 && <GetStarted handleNext={handleNext} />}

        {step === 3 && (
          <SlideCard
            img={illustration_1}
            title="Search for a service"
            details="Find the right service for your needs easily, with a variety of options available at your fingertips."
            slide={3}
            handleNext={handleNext}
            handleBoarded={handleBoarded}
          />
        )}

        {step === 4 && (
          <SlideCard
            img={illustration_2}
            title="Book a service and contact them"
            details="Book or contact reliable professionals to help you get that task done."
            slide={4}
            handleNext={handleNext}
            handleBoarded={handleBoarded}
          />
        )}

        {step === 5 && (
          <SlideCard
            img={illustration_3}
            title="Continue on or off-platform"
            details="Continue negotiation process on or off-platform. All at your own convenience and satisfaction."
            slide={5}
            handleNext={handleNext}
            handleBoarded={handleBoarded}
          />
        )}
      </div>
    </>
  );
};

export default Welcome;

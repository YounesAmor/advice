import axios from "axios";
import { useEffect, useState } from "react";
const Advice = () => {
  const [adviceNumber, setAdviceNumber] = useState("");
  const [advice, setAdvice] = useState("");
  async function generateAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
      setAdviceNumber(response.data.slip.id);
      console.log(response.data.slip.id, response.data.slip.advice);
    } catch (error) {
      setAdvice("Error Fetching the API please try again later");
      setAdviceNumber(999);
    }
  }
  useEffect(() => {
    generateAdvice();
  });

  return (
    <div className="bg-darkGrayishBlue sm:w-[350px] sm:h-[400px] lg:w-[540px] lg:h-[325px] border rounded-lg border-transparent relative">
      <div className="mx-10">
        <div className="flex flex-col justify-center items-center font-medium">
          <p className="text-manrope tracking-widest font-bold text-neonGreen text-xl mt-10">
            Advice #{adviceNumber}
          </p>
          <p className="lg:text-3xl sm:text-2xl text-manrope text-lightCyan mt-6">
            {advice}
          </p>
          <div className="mt-8">
            <div className="sm:hidden lg:flex absolute bottom-[60px] right-[48px]">
              <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                  <g transform="translate(212)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="lg:hidden absolute bottom-[60px] right-[29px]">
              <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                  <g transform="translate(138)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="bg-neonGreen border rounded-full border-transparent p-6 absolute bottom-[-40px] hover:cursor-pointer hover:shadow-neonGreen hover:shadow-3xl "
            onClick={generateAdvice}
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advice;

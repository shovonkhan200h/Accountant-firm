import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer text-sm lg:pb-5 flex items-center justify-between lg:text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "Can We Submit Company Accounts & Tax Returns?",
      a: `Definitely! We are expert in bookkeeping and company accountancy.
We use market leading Accounting Software
We follow Company House and HMRC guidence
Accurate books and record analysis
On time communication with Directors
Timely submission of company accounts and tax returns before deadline`,
    },
    {
      q: "Can We Submit Self-Employed Account And Tax Returns?",
      a: `Definitely! We are expert in bookkeeping and company accountancy.
We use market leading Accounting Software
We follow Company House and HMRC guidence
Accurate books and record analysis
On time communication with Directors
Timely submission of company accounts and tax returns before deadline`
    },
    {
      q: "Can We Help With Payroll And Mortgage",
      a: `Establish a clear payroll process
Stay updated with tax laws and regulations
Accurate record keeping
Use reliable payroll software
Communicate with employees`
    },
    {
      q: "Can We Help With Tax And VAT?",
      a: `Of course! We are expert on tax and VAT guidance
We will help you with timely tax and VAT planning
Also with accurate tax and VAT filing
VAT registration and de-registration support
Professional tax and VAT representation`
    },
    {
      q: "Why Are Those Requirments For Businesses?",
      a: `Payroll, finance, tax, and VAT are essential for any business to ensure accurate employee compensation, financial management, compliance with tax laws, and proper VAT handling, ensuring smooth operations and legal compliance.`
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8 w-full">
      <div className="space-y-3 text-center">
        <h1 className="text-sm lg:text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto lg:text-lg text-sm">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

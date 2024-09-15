import { SiAegisauthenticator } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { HiReceiptTax } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";
import { GiAbstract116 } from "react-icons/gi";
import { GiDeathStar } from "react-icons/gi";
import { GiFlexibleStar } from "react-icons/gi";
import { TbMichelinStarGreen } from "react-icons/tb";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { LiaStarOfLifeSolid } from "react-icons/lia";

export const LINKS = [
  { text: "Home", targetId: "home" },
  { text: "Our Services", targetId: "ourservice" },
  { text: "Our Review", targetId: "ourreview" },
  { text: "Faq", targetId: "faq" },
  { text: "Why us", targetId: "whyus" },
  { text: "Contact", targetId: "heroForm" },
];

export const abouts = [
  {
    id: 1,
    icon: <SiAegisauthenticator />,
    heading: "Self-Employed Tax Returns",
    text: "If you are a sole trader or self-employed looking for affordable accounting service then we can provide self-assesment tax returns at a cost you can afford.",
  },
  {
    id: 2,
    icon: <SiAegisauthenticator />,
    heading: "Limited Company Accounting",
    text: "All type of company accounting services provided by qualified accountants with a affordable fixed fees no matter what sectors.",
  },
  {
    id: 3,
    icon: <SiAegisauthenticator />,
    heading: "Payroll Management",
    text: `Financial record of employee gross earnings, payroll deductions and net pay, as well as the employer's related payroll tax liability.`,
  },
  {
    id: 4,
    icon: <SiAegisauthenticator />,
    heading: "Efficient Tax and VAT Management",
    text: `You can improve and reinforce subcontractor retention with our expert Tax and VAT management services that help them take home every penny they've earned.`,
  },
  {
    id: 5,
    icon: <SiAegisauthenticator />,
    heading: "Company Formation and Startup with Business Loan",
    text: `We’re with you at each step of the incorporation process. We’ll advise on business structure, sort licences and paperwork, and get your finances set up for success.`,
  },

  {
    id: 6,
    icon: <SiAegisauthenticator />,
    heading: "Qualified Accounting Advisor",
    text: "Your dedicated qualified accountant will always be on hand to answer questions about your business tax compliance. You can contact them via email, phone, or meet them in person.",
  },
  {
    id: 7,
    icon: <MdAccountBalance />,
    heading: "Accounting",
    text: "Our accounting firm offers comprehensive financial solutions tailored to your business needs, helping you optimize your financial processes, stay compliant, and achieve your financial goals.",
  },
  {
    id: 8,
    icon: <HiReceiptTax />,
    heading: "Tax, Compliance & Payroll",
    text: "Our tailored Tax, Compliance & Payroll solutions provide proactive tax planning, timely filing, and meticulous payroll management, giving you confidence in navigating complex tax landscapes and meeting payroll obligations.",
  },
  {
    id: 9,
    icon: <MdLibraryBooks />,
    heading: "Financial Services",
    text: "Our comprehensive Financial Services provide tailored solutions for your financial needs, leveraging expertise, technology, and innovation to optimize your financial success.",
  },
  {
    id: 9,
    icon: <GiAbstract116 />,
    heading: "Growth & Funding Access",
    text: "Our Growth & Funding Access solutions provide strategic support for business growth, leveraging expertise and resources to access funding opportunities and drive sustainable success.",
  },
];

export const heroText = [
  {
    id: 1,
    icon: <GiDeathStar />,
    text: "Streamlined Finances — Enjoy hassle-free accounting with automated systems that save you time and stress.",
  },
  {
    id: 2,
    icon: <GiFlexibleStar />,
    text: `Expert Advice — Gain insights and guidance from seasoned accountants who understand your industry's nuances.`,
  },
  {
    id: 3,
    icon: <TbMichelinStarGreen />,
    text: `Customised Solutions — Benefit from services that are perfectly aligned with your business’s unique needs.`,
  },
  {
    id: 4,
    icon: <TbTopologyStarRing3 />,
    text: `Flexible Services — Adapt your accounting services as your business grows and your needs evolve.`,
  },
  {
    id: 5,
    icon: <LiaStarOfLifeSolid />,
    text: `Compliance Assurance — Stay compliant with all UK financial regulations without the headache, thanks to our expert oversight.`,
  },
];

import { FaCloud } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import { bookeeping, payroll, startup, vat } from "../assets";

export const headerItem = [
  {
    id: 1,
    icon: <FaCloud />,
    text: "Satisfaction Guarantee",
  },
  {
    id: 2,
    icon: <GiDeathStar />,
    text: "No Hidden Fees",
  },
  {
    id: 3,
    icon: <GiChampions />,
    text: "Flexible Service",
  },
  {
    id: 4,
    icon: <LiaStarOfLifeSolid />,
    text: "Unlimited Support",
  },
];

export const body1Text = [
  {
    id: 1,
    heading: "1. Discover Your Perfect Fit",
    text: `Get in touch for a free initial consultation and choose from our range of flexible, affordable accounting solutions tailored to fit your business perfectly.`,
    icon: <GiChampions />,
  },
  {
    id: 2,
    heading: "2. Experience Our Expertise",
    text: `Gain instant access to our expert team. Let us handle your accounting with precision and proactive advice, allowing you more time to focus on what you do best.`,
    icon: <GiDeathStar />,
  },
  {
    id: 3,
    heading: "3. Watch Business Flourish",
    text: `Observe the growth of your business as our comprehensive accounting solutions optimise your financial health.`,
    icon: <FaCloud />,
  },
];

export const whyUstext = [
  {
    id: 1,
    img:startup,
    heading: "Company Formation & Startup",
    text: `Appointment of Directors
Appointment of Secretory
Issue of subscriber share
Registered Office Services
Assistance in opening Bank Account
Business Plan
Business Loan`,
  },
  {
    id: 2,
    img:bookeeping,
    heading: "Bookeeping",
    text: `Bookkeping Setup Advice
Keeping Record
Payable Analysis
Bank Analysis
Family run BusinessesReliable Accounting Software
Expense Tracking
Collecting Records
Reliable Servic`,
  },
  {
    id: 3,
    img:vat,
    heading: "VAT",
    text: `VAT Registration
VAT Planning and Administration
Flat Rate Scheme
Standard Rate Scheme
VAT Reconciliation
VAT Returns
Liasing with HMRC
VAT Enquiries
VAT De-Registration`,
  },
  {
    id: 4,
    img:payroll,
    heading: "Payroll",
    text: `Monthly Payroll Services
Benefits Planning
Online Payee Services
Payslips amd Pension
Employee Cost Analysis
Liasing with HMRC for PAYE matters
P45, P46, P60 and IR35
Employee Remuneration Planning
RTI (Real Time Information`,
  }
];

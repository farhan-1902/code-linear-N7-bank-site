export interface Solution {
    key: string;
    title: string;
    description: string;
}

export interface NavItem {
    label: string;
    href: string;
    hasDropdown: boolean;
}

export interface Article {
  category: string;
  title: string;
  author: string;
  date: string;
  iconName?: string;
}

export const navItems: NavItem[] = [
  { label: "SOLUTIONS", href: "#solutions", hasDropdown: true },
  { label: "RESOURCES", href: "#stories", hasDropdown: true },
  { label: "ABOUT US", href: "#contact", hasDropdown: false },
];

export const trustedCompanies: string[] = ["Shells", "SmartFinder", "Zoomerr",  "ArtVenue", "Kontrastr", "WavesMarathon"];

export const solutions: Solution[] = [
  {
    key: "CoreBankingCB7",
    title: "Core Banking CB7",
    description: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    key: "DigitalBankingN7",
    title: "Digital Banking N7",
    description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients"
  },
  {
    key: "OpenBanking",
    title: "Open Banking",
    description: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring."
  },
  {
    key: "LoanOriginationSystem",
    title: "Loan Origination",
    description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients "
  },
  {
    key: "LoanManagementSystem",
    title: "Loan Management System",
    description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients "
  }
];

export const articles: Article[] = [
  {
    title: "How to transition from a traditional to a digital bank",
    category: "GETTING STARTED",
    date: "17/08/24",
    author: "David Grohl",
    iconName: "Article"
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "GETTING STARTED",
    date: "17/08/24",
    author: "David Grohl"
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "GETTING STARTED",
    date: "17/08/24",
    author: "David Grohl"
  },
];

export const solutionsN7: string[] = ["Core Banking CB7", "Digital Banking N7", "Open Banking", "Loan Origination System", "Loan Management System", "Digital Transformation"];
export const banking: string[] = ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"];
export const socials: string[] = ["LinkedIn", "X"];
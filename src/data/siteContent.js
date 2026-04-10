import { SITE } from "../config/site.js";

export const ORGANISATION_OVERVIEW =
  `${SITE.shortName} stands for the International Association for Agricultural Workers with Disabilities.`;

export const GOVERNING_DOCUMENT_SUMMARY =
  "The organisation's governing document describes it as a non-profit entity dedicated to the welfare of agricultural workers with disabilities.";

export const ABOUT_LEAD = `${ORGANISATION_OVERVIEW} ${GOVERNING_DOCUMENT_SUMMARY}`;

export const ABOUT_AUDIENCE = [
  "Disabled agricultural workers seeking information or support routes.",
  "Family members affected by disability in agricultural settings.",
  "Advocates, lawyers, policymakers, and researchers.",
  "Supporters who want governance and mission clarity.",
];

export const MISSION_LEAD =
  "The governing document describes a public-benefit mission centred on disabled agricultural workers and their family members.";

export const MISSION_POINTS = [
  "Advance protection and welfare in agricultural settings.",
  "Support disabled agricultural workers and their families.",
  "Promote equitable legal and property rights.",
  "Encourage legislative change where rights need stronger protection.",
  "Educate the public and policymakers about disability-related barriers.",
];

export const GOVERNANCE_LEAD =
  "The governing document presents IAAWD as a non-profit entity dedicated to the welfare of agricultural workers with disabilities.";

export const GOVERNANCE_POINTS = [
  "The organisation is governed by a board of trustees.",
  "Membership is open to people and organisations that support the mission.",
  "Meetings include trustee meetings and an annual general meeting.",
  "Funds are to be used for the organisation's stated purposes.",
  "Amendments and dissolution require member votes under the document.",
];

export const CONTACT_LEAD =
  "Use this page for enquiries about disabled agricultural workers, family impact, governance, mission, public materials, or related rights issues.";

export const CONTACT_TOPICS = [
  "Disability and agricultural work.",
  "Family welfare and rural legal issues.",
  "Governance or published documents.",
  "Support, advocacy, or collaboration enquiries.",
];

export const RESOURCES_LEAD =
  "This page gathers the main public materials published or referenced by IAAWD so visitors can reach governance, contact, and supporting information quickly.";

export const FAQ_ITEMS = [
  {
    question: "What is IAAWD?",
    answer: ABOUT_LEAD,
    href: "/about",
    linkLabel: "Read the about page",
  },
  {
    question: "Who does IAAWD serve?",
    answer:
      "IAAWD focuses on disabled agricultural workers, family members affected by disability in agricultural settings, and supporters, advocates, lawyers, policymakers, and researchers who need clear mission and governance information.",
    href: "/about",
    linkLabel: "See the audience overview",
  },
  {
    question: "What does the organisation aim to do?",
    answer:
      "Its published purposes include protection and welfare in agricultural settings, support for disabled agricultural workers and their families, equitable legal and property-rights advocacy, public education, and legislative change where stronger protection is needed.",
    href: "/mission",
    linkLabel: "Read the mission summary",
  },
  {
    question: "How is IAAWD governed?",
    answer:
      "The organisation's governing document says IAAWD is overseen by trustees, allows supportive individuals and organisations to join as members, and sets rules for meetings, finances, amendments, and dissolution.",
    href: "/governance",
    linkLabel: "Read the governance summary",
  },
  {
    question: "Where can I read the governing document and other public materials?",
    answer:
      "The resources page links to the downloadable governing document PDF, the governance summary, related petition background, and the main public contact route.",
    href: "/resources",
    linkLabel: "Open resources",
  },
  {
    question: "How can I contact IAAWD?",
    answer: `Use the contact page or email ${SITE.email} directly about governance, public materials, support themes, or related enquiries.`,
    href: "/contact",
    linkLabel: "Go to contact",
  },
];

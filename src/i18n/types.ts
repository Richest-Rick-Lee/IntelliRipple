export type Locale = "zh-CN" | "zh-TW" | "en" | "ja";

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    products: string;
    culture: string;
    contact: string;
    logoSub: string;
    menuToggle: string;
    logoAlt: string;
    language: string;
  };
  footer: {
    copyright: string;
  };
  home: {
    title: string;
    titleHighlight: string;
    desc: string;
    buildTitle: string;
    buildLead: string;
    buildItems: string[];
    buildFoot: string;
    whyTitle: string;
    whyLead: string;
    whyItems: string[];
    whyFoot: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    desc: string;
    profileTitle: string;
    profileP1: string;
    profileP2: string;
    missionTitle: string;
    missionSub: string;
    missionText: string;
    visionTitle: string;
    visionSub: string;
    visionText: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
    conductTitle: string;
    conducts: { title: string; text: string }[];
  };
  products: {
    title: string;
    titleHighlight: string;
    desc: string;
    fuboTitle: string;
    fuboTag: string;
    fuboAlt: string;
    fuboP1: string;
    fuboP2: string;
    boleTitle: string;
    boleTag: string;
    boleAlt: string;
    boleP1: string;
    boleP2: string;
  };
  culture: {
    title: string;
    titleHighlight: string;
    desc: string;
    cards: { title: string; body: string }[];
  };
  contact: {
    title: string;
    titleHighlight: string;
    desc: string;
    infoTitle: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    addressLabel: string;
    address: string;
    hoursTitle: string;
    hours: string[];
  };
}

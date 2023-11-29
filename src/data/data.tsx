import readImg from "../assets/read-quran.jpg";
import listenImg from "../assets/listen-quran.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBookQuran, faHeadphones } from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  {
    id: 1,
    name: "الرئيسية",
    to: "/",
  },
  {
    id: 2,
    name: "القرآن الكريم",
    to: "/quran",
  },
  // {
  //   id: 3,
  //   name: "التفسير الميسر",
  //   to: "/tafsir",
  // },
  {
    id: 4,
    name: "الحديث الشريف",
    to: "/hadeeth",
  },
  {
    id: 5,
    name: "الأذكار",
    to: "/azkar",
  },
  {
    id: 6,
    name: "توقيت الصلاة",
    to: "/pray-timing",
  },
];

// Footer Data
export const footerData = [
  {
    span: "فيسبوك",
    icon: <FontAwesomeIcon icon={faFacebookF} />,
    color: "text-[#1877f2]",
    link: "https://www.facebook.com/profile.php?id=100085749470017",
  },
  {
    span: "منصة X",
    icon: <FontAwesomeIcon icon={faXTwitter} />,
    color: "text-[#14171a]",
    link: "https://twitter.com/ahmed_magdy135",
  },
  {
    span: "جيت هاب",
    icon: <FontAwesomeIcon icon={faGithub} />,
    color: "text-[#333]",
    link: "https://github.com/ahmed-magdee",
  },
];

// Landing Page
export const mainSideDiv = [
  "القرآن الكريم",
  "التفسير الميسر",
  "الحديث الشريف",
  "أذكار الصباح والمساء",
  "أدعية الأنبياء من القرآن",
];

// Location For Pray Timing
export const rightLocation = [
  "الاسكندرية",
  "مطروح",
  "القاهرة",
  "الجيزة",
  "شمال سيناء",
  "جنوب سيناء",
  "بور سعيد",
  "الغردقة",
  "كفر الشيخ",
  "البحيرة",
  "المنوفية",
  "دمياط",
  "الدقهلية",
  "الغربية",
  "الشرقية",
  "القليوبية",
  "الاسماعيلية",
  "السويس",
  "البحر الاحمر",
  "الفيوم",
  "بني سويف",
  "المنيا",
  "اسيوط",
  "سوهاج",
  "قنا",
  "الاقصر",
  "اسوان",
];

// Cards Choose Quran
export const chooseCards = [
  {
    id: 0,
    img: readImg,
    text: "(إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّـهِ وَأَقَامُوا الصَّلَاةَ وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً يَرْجُونَ تِجَارَةً لَّن تَبُورَ)",
    link: {
      text: "قراءة القرآن",
      to: "/quran/read",
    },
    icon: <FontAwesomeIcon icon={faBookQuran} />,
  },
  {
    id: 1,
    img: listenImg,
    text: "(وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُواْ لَهُ وَأَنصِتُواْ لَعَلَّكُمْ تُرْحَمُونَ)",
    link: {
      text: "الإستماع للقرآن",
      to: "/quran/listen",
    },
    icon: <FontAwesomeIcon icon={faHeadphones} />,
  },
];

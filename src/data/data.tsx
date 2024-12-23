import readImg from "../assets/read-quran.jpg";
import listenImg from "../assets/listen-quran.jpeg";
import nameAndNumber from "../assets/show-name-and-number.png";
import saveAya from "../assets/save-aya.png";
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
  {
    id: 7,
    name: "تعليمات",
    to: "/info",
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
  {
    location: "الإسكندرية",
    value: "alexandria",
  },
  {
    location: "مطروح",
    value: "matrouh",
  },
  {
    location: "القاهرة",
    value: "cairo",
  },
  {
    location: "الجيزة",
    value: "giza",
  },
  {
    location: "شمال سيناء",
    value: "northsinai",
  },
  {
    location: "جنوب سيناء",
    value: "southsinai",
  },
  {
    location: "بور سعيد",
    value: "porsaid",
  },
  {
    location: "الغردقة",
    value: "الغردقة",
  },
  {
    location: "كفر الشيخ",
    value: "kafrelsheikh",
  },
  {
    location: "البحيرة",
    value: "البحيرة",
  },
  {
    location: "المنوفية",
    value: "المنوفية",
  },
  {
    location: "دمياط",
    value: "دمياط",
  },
  {
    location: "الدقهلية",
    value: "الدقهلية",
  },
  {
    location: "الغربية",
    value: "الغربية",
  },
  {
    location: "الشرقية",
    value: "الشرقية",
  },
  {
    location: "القليوبية",
    value: "القليوبية",
  },
  {
    location: "الاسماعيلية",
    value: "الاسماعيلية",
  },
  {
    location: "السويس",
    value: "السويس",
  },
  {
    location: "البحر الاحمر",
    value: "البحرالاحمر",
  },
  {
    location: "الفيوم",
    value: "الفيوم",
  },
  {
    location: "بني سويف",
    value: "banisweif",
  },
  {
    location: "المنيا",
    value: "المنيا",
  },
  {
    location: "اسيوط",
    value: "اسيوط",
  },
  {
    location: "سوهاج",
    value: "سوهاج",
  },
  {
    location: "قنا",
    value: "قنا",
  },
  {
    location: "الاقصر",
    value: "الاقصر",
  },
  {
    location: "اسوان",
    value: "اسوان",
  },
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

// The Information
export const information = [
  {
    id: 1,
    text: "لو كنت تفتح الموقع من جهاز كمبيوتر وتقف علي اسم السورة فإن بيانات السورة ستظهر كرقم السورة في المصحف وعدد آياتها وكذلك مكان نزولها",
    img: nameAndNumber,
  },
  {
    id: 2,
    text: "تجربة حفظ السورة ورقم الأية التي كنت فيها تأتي للحفاظ علي المكان الذي كنت تقرأ منه وهذا لا يجعلك قلقا فحتي لو اغلقت الموقع وفتحته للقراءة مجددا تستطيع الوصول إلي المكان الذي انهيت فيه القراة المرة السابقة ماعليك إلا الضغط علي رقم الأية فقط وسيتم التكفّل بالباقي",
    img: saveAya,
  },
  {
    id: 3,
    text: "تستطيع تفسير الأيات التي تريدها عن طريق الضغط علي الأية نفسها ليظهر التفسير",
  },
  {
    id: 4,
    text: "يوجد علي الموقع اكثر من 4000 حديث شريف يمكنك قراءة ماتريد منها عن طريق الذهاب إلي صفحة الحديث الشريف",
  },
  {
    id: 5,
    text: "يوجد العديد من الأذكار مثل أذكار الصباح وأذكار المساء وأذكار النوم وأدعية الأنبياء والعديد من الأذكار",
  },
  {
    id: 6,
    text: "يوجد مواقيت الصلاة وتاريخ اليوم الهجري وتوقيت الثلث الأخير من الليل",
  },
];

// Doaa khatm quran
export const khatmQuran = [
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ ارْحَمْنِي بالقُرْءَانِ وَاجْعَلهُ لِي إِمَاماً وَنُوراً وَهُدًى وَرَحْمَةً",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَانَسِيتُ وَعَلِّمْنِي مِنْهُ مَاجَهِلْتُ وَارْزُقْنِي تِلاَوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ وَاجْعَلْهُ لِي حُجَّةً يَارَبَّ العَالَمِينَ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي، وَاجْعَلِ الحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ وَاجْعَلِ المَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ اجْعَلْ خَيْرَ عُمْرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ فِيهِ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِيشَةً هَنِيَّةً وَمِيتَةً سَوِيَّةً وَمَرَدًّا غَيْرَ مُخْزٍ وَلاَ فَاضِحٍ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ المَسْأَلةِ وَخَيْرَ الدُّعَاءِ وَخَيْرَ النَّجَاحِ وَخَيْرَ العِلْمِ وَخَيْرَ العَمَلِ وَخَيْرَ الثَّوَابِ وَخَيْرَ الحَيَاةِ وَخيْرَ المَمَاتِ وَثَبِّتْنِي وَثَقِّلْ مَوَازِينِي وَحَقِّقْ إِيمَانِي وَارْفَعْ دَرَجَتِي وَتَقَبَّلْ صَلاَتِي وَاغْفِرْ خَطِيئَاتِي وَأَسْأَلُكَ العُلَا مِنَ الجَنَّةِ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ وَعَزَائِمِ مَغْفِرَتِكَ وَالسَّلاَمَةَ مِنْ كُلِّ إِثْمٍ وَالغَنِيمَةَ مِنْ كُلِّ بِرٍّ وَالفَوْزَ بِالجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الأُمُورِ كُلِّهَا، وَأجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الآخِرَةِ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ اقْسِمْ لَنَا مِنْ خَشْيَتِكَ مَاتَحُولُ بِهِ بَيْنَنَا وَبَيْنَ مَعْصِيَتِكَ وَمِنْ طَاعَتِكَ مَاتُبَلِّغُنَا بِهَا جَنَّتَكَ وَمِنَ اليَقِينِ مَاتُهَوِّنُ بِهِ عَلَيْنَا مَصَائِبَ الدُّنْيَا وَمَتِّعْنَا بِأَسْمَاعِنَا وَأَبْصَارِنَا وَقُوَّتِنَا مَاأَحْيَيْتَنَا وَاجْعَلْهُ الوَارِثَ مِنَّا وَاجْعَلْ ثَأْرَنَا عَلَى مَنْ ظَلَمَنَا وَانْصُرْنَا عَلَى مَنْ عَادَانَا وَلاَ تجْعَلْ مُصِيبَتَنَا فِي دِينِنَا وَلاَ تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا وَلَا مَبْلَغَ عِلْمِنَا وَلاَ تُسَلِّطْ عَلَيْنَا مَنْ لَا يَرْحَمُنَا",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "اللَّهُمَّ لَا تَدَعْ لَنَا ذَنْبًا إِلَّا غَفَرْتَهُ وَلَا هَمَّا إِلَّا فَرَّجْتَهُ وَلَا دَيْنًا إِلَّا قَضَيْتَهُ وَلَا حَاجَةً مِنْ حَوَائِجِ الدُّنْيَا وَالآخِرَةِ إِلَّا قَضَيْتَهَا يَاأَرْحَمَ الرَّاحِمِينَ",
    description: "",
    count: 0,
  },
  {
    category: "دعاء ختم القرآن",
    content:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ وَصَلَّى اللهُ عَلَى سَيِّدِنَا وَنَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ الأَخْيَارِ وَسَلَّمَ تَسْلِيمًا كَثِيراً.",
    description: "",
    count: 0,
  },
];

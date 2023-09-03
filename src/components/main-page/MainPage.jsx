import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import {
  faFacebookF,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { allStyles } from "../constants/styles/allStyles";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollToTop from "../ScrollToTop";
import MainContainer from "../constants/MainContainer";

function MainPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [animate, setAnimate] = useState(false);
  const buttonRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimate(true);
    buttonRef.current.classList.add("pointer-events-none");
    emailjs
      .send(
        "service_rescg0l",
        "template_r8enati",
        {
          from_name: form.name,
          to_name: "Ahmed",
          from_email: form.email,
          to_email: "am247249@gmail.com",
          message: form.message,
        },
        "W0zUy-XYg9x_ktpb3"
      )
      .then(
        () => {
          setAnimate(false);
          alert("تم إرسال رسالتك بشكل صحيح !");
          setForm({
            name: "",
            email: "",
            message: "",
          });
          buttonRef.current.classList.remove("pointer-events-none");
        },
        (error) => {
          setAnimate(false);
          alert("حدث مشكلة حاول في وقت لاحق");
          console.log(error);
          buttonRef.current.classList.remove("pointer-events-none");
        }
      );
  };

  return (
    <>
      {<Header section />}
      <ScrollToTop />
      <div className="my-5 shadow-section-shadow px-4 py-7 text-center">
        <h1 className="text-blue-900 mb-8">
          <q>أدعو لمن فقدناهم</q>
        </h1>
        <p className="text-lg leading-[2.4]">
          اللهم اغفر لهم وارحمهم، وعافهم واعف عنهم، وأكرم نزلهم، ووسع مدخلهم،
          واغسلهم بالماء والثلج والبرد، ونقهم من الخطايا كما ينقى الثوب الأبيض
          من الدنس، وأبدلهم دارا خيرا من دارهم، وأهلا خيرا من أهلهم، وزوجا خيرا
          من زوجه، وأدخلهم الجنة، وأعذهم من عذاب القبر، ومن عذاب النار" "اللهم
          إنهم في ذمتك، وحبل جوارك، فقهم من فتنة القبر وعذاب النار، وأنت أهل
          الوفاء والحق، اللهم اغفر لهم وارحمهم، إنك أنت الغفور الرحيم" "اللهم
          اغفر لأحيائنا، وأمواتنا، وذكراننا، وإناثنا، وصغيرنا، وكبيرنا، ومن
          أحييته منا فأحيه على الإيمان، ومن توفيته منا فتوفه على الإسلام
        </p>
      </div>
      <footer className="py-8 bg-[url('assets/moshaf.jpg')] bg-cover bg-center relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-blue-200/70">
        <MainContainer>
          <div className="all-texts text-center flex justify-between flex-wrap gap-8 md:gap-0 relative">
            <div className={allStyles["div-form"]}>
              <form
                className="max-w-[400px] mx-auto shadow-form-shadow px-5 py-[20px]  backdrop-blur-[30px] bg-blue-200/70 rounded-xl"
                onSubmit={handleSubmit}
              >
                <div className={allStyles["div-input-label"]}>
                  <label htmlFor="name" className="text-lg">
                    أسمك:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="أكتب أسمك"
                    className={allStyles.input}
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div className={allStyles["div-input-label"]}>
                  <label htmlFor="email" className="text-lg">
                    إيميلك:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="أكتب إيميلك"
                    className={allStyles.input}
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                <div className={allStyles["div-input-label"]}>
                  <label htmlFor="message" className="text-lg">
                    رسالتك:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="أكتب رسالتك"
                    className={`${allStyles.input} resize-none h-[200px]`}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className={allStyles.button}
                  ref={buttonRef}
                >
                  {animate ? "جاري إرسال رسالتك..." : "أرسل رسالتك"}
                </button>
              </form>
            </div>
            <div className="text-white leading-[2.4] text-lg w-full md:w-[calc((100%/2)-10px)] md:-order-1">
              اللهمّ اجعل لي من لدنك وليًا واجعل لي من لدنك سلطانًا نصيرًا،
              اللهمّ لا إله إلّا أنت سبحانك إنّي كنت من الظالمين، اللهمّ فتقبّل
              منّي دعائي إنّك أنت السميع العليم. اللهمّ علّمني من العلوم النافعة
              ما تعينني به على نشر دينك في أرضك الواسعة يا ربّ العالمين، اللهمّ
              وفّقني إلى ما فيه خير لي في دنياي وآخرتي يا أكرم الأكرمين.
            </div>
          </div>
        </MainContainer>
      </footer>
      <div className="foot-and-icons bg-blue-950 text-white py-8">
        <div className="container">
          <div className="all text-center flex justify-between items-center flex-wrap">
            <div className="icons w-full md:w-[calc((100%/2)-10px)]">
              <h2 className="">للتواصل معي</h2>
              <div className="flex items-center justify-center gap-5 mt-5">
                <a
                  href="https://www.facebook.com/profile.php?id=100085749470017"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full text-[22px] scale-100 transition-all duration-300 hover:scale-150 hover:shadow-[0px_0px_15px_0px_white]"
                  aria-label="facebook-link"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://twitter.com/ahmed_magdy135"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full text-[22px] transition-all duration-300 hover:scale-150 hover:shadow-[0px_0px_15px_0px_white]"
                  aria-label="twitter-link"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://github.com/ahmed-magdee"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full text-[22px] transition-all duration-300 hover:scale-150 hover:shadow-[0px_0px_15px_0px_white]"
                  aria-label="github-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <div className="created w-full md:w-[calc((100%/2)-10px)] mt-5 md:mt-0">
              <p>
                تم عمل هذا التصميم بواسطة{" "}
                <span className="font-bold text-blue-400">أحمد مجدي</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

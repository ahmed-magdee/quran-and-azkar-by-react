import Form from "./Form";

export default function SectionForm() {
  return (
    <div className="form-section py-20 bg-[url('./assets/form.jpg')] bg-center bg-cover text-white font-cairo relative z-10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-header/80 -z-[1]" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-black/80 -z-[1]" />
      <div className="container">
        <h2 className="w-fit mx-auto border-b-[2px] mb-8 border-white">
          قل رأيك
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <p className="leading-[2.4] text-lg w-full md:w-[calc(50%-20px)]">
            اللهمّ اجعل لي من لدنك وليًا واجعل لي من لدنك سلطانًا نصيرًا، اللهمّ
            لا إله إلّا أنت سبحانك إنّي كنت من الظالمين، اللهمّ فتقبّل منّي
            دعائي إنّك أنت السميع العليم. اللهمّ علّمني من العلوم النافعة ما
            تعينني به على نشر دينك في أرضك الواسعة يا ربّ العالمين، اللهمّ
            وفّقني إلى ما فيه خير لي في دنياي وآخرتي يا أكرم الأكرمين.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}

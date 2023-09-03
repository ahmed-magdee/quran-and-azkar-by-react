import Header from "../header/Header";

function NoMatch() {
  return (
    <div className="bg-[url('./assets/page-not-page.jpg')] bg-cover bg-center h-screen relative before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-200/40 before:top-0 before:left-0 z-30 before:-z-[1]">
      <Header />
    </div>
  );
}

export default NoMatch;

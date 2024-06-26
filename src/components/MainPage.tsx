import AboutComoany from "./AboutComoany";
import Footer from "./Footer";
import HeadphoneInfo from "./HeadphoneInfo";
import Items from "./Items";
import YX1EarPhones from "./YX1EarPhones";
import ZX7Speaker from "./ZX7Speaker";
import Header from "./Header";

export default function MainPage() {
  console.log("rendered");
  return (
    <>
      <div className="w-full h-full bg-headerBackground pb-[142px] bg-center bg-no-repeat bg-cover">
        <Header />
        <HeadphoneInfo />
      </div>
      <Items />
      <ZX7Speaker />
      <YX1EarPhones />
      <AboutComoany />
      <Footer />
    </>
  );
}

import AboutComoany from "./AboutComoany";
import Footer from "./Footer";
import HeadphoneInfo from "./HeadphoneInfo";
import Items from "./Items";
import YX1EarPhones from "./YX1EarPhones";
import Zx7Speaker from "./Zx7Speaker";
import Header from "./Header";
import SpeakerCard from "./SpeakerCard";

export default function MainPage() {
  console.log("rendered");
  return (
    <>
      <div className="w-full h-full bg-headerBackground pb-[142px] bg-center bg-no-repeat bg-cover">
        <Header />
        <HeadphoneInfo />
      </div>
      <Items />
      <SpeakerCard />
      <Zx7Speaker />
      <YX1EarPhones />
      <AboutComoany />
      <Footer />
    </>
  );
}

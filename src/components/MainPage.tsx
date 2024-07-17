import AboutComoany from "./AboutComoany";
import Footer from "./Footer";
import HeadphoneInfo from "./HeadphoneInfo";
import Items from "./Items";
import YXX1EarPhones from "./YXX1EarPhones";
import Zxx7Speaker from "./Zxx7Speaker";
import Header from "./Header";
import SpeakerCard from "./SpeakerCard";
import Cart from "./Cart";

export default function MainPage() {
  console.log("rendered");
  return (
    <>
      <main className="w-full">
        <div className="w-full h-full bg-headerBackground pb-[142px] bg-center bg-no-repeat bg-cover">
          <Header />
        <Cart />
          <HeadphoneInfo />
        </div>
        <Items />
        <SpeakerCard />
        <Zxx7Speaker />
        <YXX1EarPhones />
        <AboutComoany />
        <Footer />
      </main>
    </>
  );
}

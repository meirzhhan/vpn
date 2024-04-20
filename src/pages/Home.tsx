import CountryBlock from "../components/CountryBlock/CountryBlock";
import First from "../components/SectionFirst/First";
import Second from "../components/SectionSecond/Second";
import Third from "../components/SectionThird/Third";

const Home = () => {
  return (
    <div className="sections">
      <First />
      <Second />
      <Third />

      <CountryBlock />
    </div>
  );
};

export default Home;

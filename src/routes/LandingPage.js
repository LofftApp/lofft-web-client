import Banner from "./../components/Banner";
import Taglines from "./../components/Taglines";
import People from "./../components/People";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Banner />
      <Taglines />
      <People />
    </div>
  );
};

export default LandingPage;

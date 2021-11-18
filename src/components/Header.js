
import CountDownToLaunch from "./countdown";

const Header = ({toggle, isLanding}) => {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/illustrations/logo.svg'} alt="Lofft Logo" className="logo" />
      <div className="nav">
        <h3 onClick={()=>toggle()}className={`nav-link ${isLanding ? "nav-active" : ""}`}>About us</h3>
        <h3 onClick={()=>toggle()}className={`nav-link ${!isLanding ? "nav-active" : ""}`}>For Investors</h3>
        <CountDownToLaunch/>
     </div>
    </header>
  );
};

export default Header;

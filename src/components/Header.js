import CountDownToLaunch from "./countdown";

const Header = () => {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/illustrations/logo.svg'} alt="Lofft Logo" className="logo" />
      <div className="nav">
        <CountDownToLaunch/>
     </div>
    </header>
  );
};

export default Header;

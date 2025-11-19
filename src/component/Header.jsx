import { Link } from "react-router-dom";
import DefaultBgImg from "../assets/DonatePageImgs/DonateNowImg.webp";

const Header = ({ HeadText, SubText, BgImg = DefaultBgImg, CurrntPage, PageLink }) => {
  return (
    <div
      className=" h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="relative px-14 lg:px-28 w-full h-full">
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 container z-10">
          <h1 className="text-white font-black text-5xl">{HeadText}</h1>
          <h2 className="text-white w-1/4 px-2 text-center text-lg">
            {SubText}
          </h2>
        </div>

        {/* Bottom element */}
        <div className="hidden md:block p-5 bg-primary absolute z-10 bottom-0 rounded-t-xl text-white">
          <h2>
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <span className="font-bold">
              <Link to={PageLink}>{CurrntPage}</Link>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

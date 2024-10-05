import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import logo from "/images/logo.png";

const Footer = () => {
  const mainLinks = [
    { href: "", text: "CONTACT US" },
    { href: "", text: "NUTRITION INFO" },
    { href: "", text: "EMPLOYMENT" },
    { href: "", text: "OUR STORY" },
    { href: "", text: "WHO WE ARE" },
    { href: "", text: "FRANCHISING" },
  ];

  const legalLinks = [
    { href: "", text: "TERMS & CONDITIONS" },
    { href: "", text: "SITEMAP" },
    { href: "", text: "PRIVACY POLICY" },
    { href: "", text: "WEB ACCESSIBILITY" },
  ];

  return (
    <div className="bg-footer">
      <footer className="flex flex-col justify-center items-center py-20 max-w-6xl mx-auto">
        <div className="space-y-14">
          <ul className="uppercase flex flex-wrap space-x-10 text-gray-700 text-sm justify-center items-center">
            <li>
              <a href="/">
                <img
                  src={logo}
                  alt=""
                  className="w-20 hover:scale-110 transition-all ease-in-out duration-700 overflow-hidden"
                />
              </a>
            </li>
            {mainLinks.map((link) => (
              <li key={link.text} className="mt-4">
                <a href={link.href} className="hover:text-red-500">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="uppercase flex flex-wrap space-x-10 text-gray-700 text-xs justify-center items-center">
            {legalLinks.map((link) => (
              <li key={link.text} className="mt-4">
                <a href={link.href} className="hover:text-red-500">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="uppercase flex flex-wrap space-x-2 text-gray-700 justify-center items-center text-3xl">
            <li className="mt-4">
              <a
                href=""
                className="hover:text-red-500 transition-all ease-in-out duration-700"
              >
                <FaFacebook className="text-3xl" />
              </a>
            </li>
            <li className="mt-4">
              <a
                href=""
                className="hover:text-red-500 transition-all ease-in-out duration-700"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </li>
            <li className="mt-4">
              <a
                href=""
                className="hover:text-red-500 transition-all ease-in-out duration-700"
              >
                <FaTwitter className="text-3xl" />
              </a>
            </li>
            <li className="mt-4">
              <a
                href=""
                className="hover:text-red-500 transition-all ease-in-out duration-700"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

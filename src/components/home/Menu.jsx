import homeIcon from "../../assets/casa.svg";
import listingsIcon from "../../assets/casa.svg";
import podcastsIcon from "../../assets/microfono.svg";
import videosIcon from "../../assets/video.svg";
import tagsIcon from "../../assets/etiqueta.svg";
import faqIcon from "../../assets/foco.svg";
import foremShopIcon from "../../assets/compras.svg";
import advertiseIcon from "../../assets/corazon.svg";
import aboutIcon from "../../assets/dev.svg";
import contactIcon from "../../assets/trompetilla.svg";
import guidesIcon from "../../assets/libro.svg";
import softwareIcon from "../../assets/pensando.svg";
import codeIcon from "../../assets/pulgar.svg";
import privacyIcon from "../../assets/cara-lentes.svg";
import termsIcon from "../../assets/ojos.svg";
import twitterIcon from "../../assets/twitter black.svg";
import facebookIcon from "../../assets/facebook.svg";
import githubIcon from "../../assets/git.svg";
import instagramIcon from "../../assets/insta.svg";
import twitchIcon from "../../assets/svg25.svg";
import fostodonIcon from "../../assets/m.svg";

export default function Menu() {
  const styleMenuItem =
    "flex rounded-md hover:text-[rgb(47,58,178)] hover:underline hover:bg-[rgba(59,73,223,0.1)] p-2";
  const styleSocialItem =
    "p-2 hover:text-[rgb(47,58,178)] hover:bg-[rgba(59,73,223,0.1)] rounded-md";
  return (
    <aside className="scroll-mt-14 text-[1rem]">
      <nav className="mb-4 m-0 p-0">
        <ul className="px-4 py-2">
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={homeIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={listingsIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Reading List
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={podcastsIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Podcasts
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={videosIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Videos
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={tagsIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Tags
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={faqIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              FAQ
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={foremShopIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Forem Shop
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={advertiseIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Advertise on DEV
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={aboutIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              About
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={contactIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Contact
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={guidesIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Guides
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={softwareIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Software comparisons
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mb-4 m-0 p-0">
        <h2 className="pl-3 py-3 text-left font-bold">Other</h2>
        <ul className="px-4 py-2">
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={codeIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Code of Conduct
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={privacyIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="" className={styleMenuItem}>
              <span className="mr-2 ml-[-8px]">
                <img src={termsIcon} alt="" className="w-[24px] h-[24px]" />
              </span>
              Terms of Use
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-start mb-4">
        <a href="" className={styleSocialItem}>
          <img src={twitterIcon} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className={styleSocialItem}>
          <img src={facebookIcon} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className={styleSocialItem}>
          <img src={githubIcon} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className={styleSocialItem}>
          <img src={instagramIcon} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className={styleSocialItem}>
          <img src={twitchIcon} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className={styleSocialItem}>
          <img src={fostodonIcon} alt="" className="w-[24px] h-[24px]" />
        </a>
      </div>
      <nav></nav>
      <div></div>
      <div></div>
      <footer className="text-sm mt-6 text-[rgb(115,115,115)] text-left">
        <p>
          <a
            href="/"
            className="font-bold text-[rgb(59,73,223)] hover:underline"
          >
            DEV Community
          </a>
          A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <p className="mt-4">
          Built on{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://www.forem.com"
            className="text-[rgb(59,73,223)] hover:underline"
          >
            Forem
          </a>{" "}
          — the{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://dev.to/t/opensource"
            className="text-[rgb(59,73,223)] hover:underline"
          >
            open source
          </a>{" "}
          software that powers{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://dev.to"
            className="text-[rgb(59,73,223)] hover:underline"
          >
            DEV
          </a>{" "}
          and other inclusive communities.
        </p>
        <p className="mt-4">
          Made with love and{" "}
          <a
            target="_blank"
            href="https://dev.to/t/rails"
            className="text-[rgb(59,73,223)] hover:underline"
          >
            Ruby on Rails
          </a>
          . DEV Community <span title="copyright">©</span> 2016 - 2024.
        </p>
      </footer>
    </aside>
  );
}

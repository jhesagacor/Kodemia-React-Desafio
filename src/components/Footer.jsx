export default function Footer() {
  const styleHref =
    "font-medium text-[rgb(59,73,223)] hover:text-[rgb(47,58,178)]";
  const styleListItem = "text-[rgb(59,73,223)] hover:text-[rgb(47,58,178)]";

  return (
    <footer className="flex flex-col justify-center items-center text-[0.875rem]   bg-[rgb(229,229,229)] p-12 text-center text-[rgb(64,64,64)]">
      <p className="text-[0.875rem]">
        <a href="" className={styleHref}>
          DEV Community
        </a>
        — A constructive and inclusive social network for software developers.
        With you every step of your journey.
      </p>
      <ul className="flex gap-6 justify-center flex-wrap text-[0.875rem] mt-2 list-none">
        <li className="ml-0">
          <a href="" className={styleListItem}>
            Home
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Podcast
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Videos
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Tags
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            FAQ
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Forem Shop
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Advertise on DEV
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            About
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Contact
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Guides
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Software comparisons
          </a>
        </li>
      </ul>
      <ul className="flex gap-6 justify-center flex-wrap text-[0.875rem] mt-2 list-none">
        <li className="ml-0">
          <a href="" className={styleListItem}>
            Code of Conduct
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Privacy Policy
          </a>
        </li>
        <li className="list-disc">
          <a href="" className={styleListItem}>
            Terms of use
          </a>
        </li>
      </ul>
      <p className="mt-2">
        Built on{" "}
        <a href="" className={styleListItem}>
          Forem
        </a>{" "}
        — the <a className={styleListItem}>open source</a> software that powers{" "}
        <a href="" className={styleListItem}>
          DEV
        </a>{" "}
        and other incusive communities.
      </p>
      <p>
        Made with love and
        <a href="" className={styleListItem}>
          Ruby on Rails
        </a>{" "}
        DEV Community
        <span> © </span> 2016 - 2024.
      </p>
    </footer>
  );
}

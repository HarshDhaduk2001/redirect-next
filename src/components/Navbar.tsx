import React from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  slug: string;
}

const NavBarData: React.FC<{ links: NavLink[] }> = ({ links }) => (
  <ul className="flex space-x-4">
    {links.map((link) => (
      <li key={link.slug}>
        <Link href={`/${link.slug}`}>
          <span className="text-blue-500 hover:text-blue-700">{link.name}</span>
        </Link>
      </li>
    ))}
  </ul>
);

const Navbar: React.FC = () => {
  const successLinks: NavLink[] = [
    { name: "Home Page", slug: "" },
    { name: "Source Page", slug: "success/source" },
    { name: "Example Page", slug: "success/example" },
  ];

  const redirectLinks: NavLink[] = [
    { name: "Home Page", slug: "" },
    { name: "Source Page", slug: "source" },
    { name: "Example Page", slug: "example" },
  ];

  return (
    <div className="flex items-center justify-between mt-5">
      <div>
        <h1 className="font-medium text-lg">Success code URL</h1>
        <NavBarData links={successLinks} />
      </div>
      <div>
        <h1 className="font-medium text-lg">308 code URL</h1>
        <NavBarData links={redirectLinks} />
      </div>
    </div>
  );
};

export default Navbar;

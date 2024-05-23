// pages/index.js
import Link from "next/link";

const HomePage = () => {
  const links = [
    { name: "Home Page", slug: "" },
    { name: "Source Page", slug: "source" },
    { name: "Example Page", slug: "example" },
    // Add more links as needed
  ];

  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.slug}>
            <Link href={`/${link.slug}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

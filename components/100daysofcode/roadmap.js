import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

const roadmap = [
  {
    topic: "Motivation and Background",
    href: "/blog/100-days-of-code",
    days: "0",
  },
  { topic: "HTML", href: "/blog/100-days-of-code-html", days: "1-8" },
  { topic: "CSS", href: "/blog/100-days-of-code-css", days: "9-17" },
  {
    topic: "JavaScript",
    href: "/blog/100-days-of-code-javascript",
    days: "xx-xx",
  },
  {
    topic: "Build a Web App",
    href: "/blog/100-days-of-code-icecream-store",
    days: "xx-xx",
  },
  {
    topic: "Responsive Web Design",
    href: "/blog/100-days-of-code-responsive-design",
    days: "xx-xx",
  },
  {
    topic: "Accessibility",
    href: "/blog/100-days-of-code-accessibility",
    days: "xx-xx",
  },
  {
    topic: "Design",
    href: "/blog/100-days-of-code-design",
    days: "xx-xx",
  },
  {
    topic: "Source Control",
    href: "/blog/100-days-of-code-source-control",
    days: "xx-xx",
  },
  {
    topic: "JavaScript Outside the Browser",
    href: "/blog/100-days-of-code-js-outside-the-browser",
    days: "xx-xx",
  },
  {
    topic: "CSS Preprocessors",
    href: "/blog/100-days-of-code-css-preprocessors",
    days: "xx-xx",
  },
  {
    topic: "CSS Styling Libraries",
    href: "/blog/100-days-of-code-css-libraries",
    days: "xx-xx",
  },
  {
    topic: "Icons & Images",
    href: "/blog/100-days-of-code-icons-and-images",
    days: "xx-xx",
  },
  {
    topic: "How Does the Web Work?",
    href: "/blog/100-days-of-code-how-does-the-web-work",
    days: "xx-xx",
  },
  {
    topic: "Task Runners & Bundlers",
    href: "/blog/100-days-of-code-task-runners-and-bundlers",
    days: "xx-xx",
  },
  {
    topic: "Linting",
    href: "/blog/100-days-of-code-linting",
    days: "xx-xx",
  },
  {
    topic: "Productivity Tools",
    href: "/blog/100-days-of-code-productivity-tools",
    days: "xx-xx",
  },
  {
    topic: "Frameworks & Libraries",
    href: "/blog/100-days-of-code-frameworks-and-libraries",
    days: "xx-xx",
  },
  {
    topic: "State Management",
    href: "/blog/100-days-of-code-state-management",
    days: "xx-xx",
  },
  {
    topic: "Testing",
    href: "/blog/100-days-of-code-testing",
    days: "xx-xx",
  },
  {
    topic: "TypeScript",
    href: "/blog/100-days-of-code-typescript",
    days: "xx-xx",
  },
  {
    topic: "Full Stack",
    href: "/blog/100-days-of-code-full-stack",
    days: "xx-xx",
  },
];

const Link = ({ topic, href }) => <a href={href}>{topic}</a>;
const Location = () => (
  <>
    &nbsp;
    <FontAwesomeIcon icon={faArrowLeftLong} /> You Are Here
  </>
);

const Roadmap = (props) => {
  const slug = window.location.pathname;

  return (
    <details className="mb-6">
      <summary>
        <h3 className="inline-block cursor-pointer">View the Roadmap</h3>
      </summary>

      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          {roadmap.map((path) => (
            <tr>
              <td>
                <Link topic={path.topic} href={path.href} />{" "}
                {path.href === slug && <Location />}
              </td>
              <td>{path.days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
};

export default Roadmap;

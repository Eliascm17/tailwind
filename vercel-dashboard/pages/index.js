import SelectorIcon from "heroicons/outline/selector.svg";
import Link from "next/link";

function VercelLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 116 100"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.5 0L115 100H0L57.5 0z"
      />
    </svg>
  );
}

function DotsHorizontalIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </svg>
  );
}

function Avatar({ src, alt = "" }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200"
      src={src}
      alt={alt}
    />
  );
}

function GithubIcon({ className }) {
  return (
    <svg fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
      ></path>
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header className="border-b border-gray-200 space-y-2">
          <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between pt-5">
            <div className="flex items-center space-x-3">
              <Link href="#">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>
              <span>
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-300"
                >
                  <line x1="10" y1="28" x2="22" y2="4" />
                </svg>
              </span>
              <span className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                <Link href="#">
                  <a className="inline-flex items-center space-x-2">
                    <span>
                      <Avatar
                        src="https://pbs.twimg.com/profile_images/1334604270256197639/6fMilNhQ_400x400.jpg"
                        alt="Elias Moreno"
                      />
                    </span>
                    <span>Elias Moreno</span>
                  </a>
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center border rounded p-0.5 hover:border-gray-100 hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <SelectorIcon className="h05 w-5 text-gray-400" />
                </button>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  className="border rounded-md px-3 py-1 border-gray-200 text-gray-600 hover:border-black transition ease-in-out duration-300"
                >
                  Feedback
                </button>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-300">
                    Blog
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-300">
                    Support
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-300">
                    Docs
                  </a>
                </Link>
              </div>
              <button>
                <DotsHorizontalIcon className="h-5 w-4 text-gray-400" />
              </button>
              <button type="button">
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1334604270256197639/6fMilNhQ_400x400.jpg"
                  alt="Elias Moreno"
                />
              </button>
            </div>
          </nav>
          <div className="max-w-5xl mx-auto px-6">
            <nav className="-mb-px flex space-x-5 text-sm leading-5">
              <Link href="#">
                <a className="border-b-2 border-black px-0.5 py-4 text-black">
                  Overview
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-300">
                  Projects
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-300">
                  Integrations
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-300">
                  Activity
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-300">
                  Domains
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-300">
                  Usage
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-300">
                  Settings
                </a>
              </Link>
            </nav>
          </div>
        </header>
        <div className="max-w-5xl mx-auto flex items-start justify-between px-6 pt-14 pb-28">
          <div className="flex space-x-8">
            <div>
              <img
                src="https://pbs.twimg.com/profile_images/1334604270256197639/6fMilNhQ_400x400.jpg"
                alt="Elias Moreno"
                className="h-24 h-24 rounded-full"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-4xl leading-10 font-bold">Elias Moreno</h1>
                <span className="mt-2 inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 uppercase text-xs leading-5 font-medium text-black">
                  hobby
                </span>
              </div>
              <div>
                <dl>
                  <dt className="text-xs leading-5 text-gray-500 uppercase tracking-wide font-medium">
                    Git Integration
                  </dt>
                  <dd className="flex items-center space-x-1 text-sm leading-5 font-medium">
                    <GithubIcon className="h-6 w-6" />
                    <span>Eliascm17</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-gray-200 bg-white px-6 py-2 text-sm leading-5 font-medium text-gray-500 hover:text-black hover:border-black transition ease-in-out duration-300">
                Invite Team
              </a>
            </Link>
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-transparent bg-black px-6 py-2 text-sm leading-5 text-white hover:text-black hover:border-black hover:bg-white  transition ease-in-out duration-300">
                Import Project
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

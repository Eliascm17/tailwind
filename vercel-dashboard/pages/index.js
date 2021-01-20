import { useState } from "react";
import SelectorIcon from "heroicons/outline/selector.svg";
import CogIcon from "heroicons/outline/cog.svg";
import PlusIcon from "heroicons/solid/plus.svg";
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

function Avatar({ src, alt = "", size = "md" }) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
  }[size];

  return (
    <img
      className={`${sizeClasses} rounded-full border border-gray-200`}
      src={src}
      alt={alt}
    />
  );
}

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({
  project,
  productionUrl,
  previewUrl,
  repo,
  days,
  errorInDev,
}) {
  return (
    <div className="divide-y divide-gray-200 rounded-lg bg-white shadow overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">{project}</h3>
          <a
            href="#"
            className="border rounded-md px-5 py-1 border-gray-200 text-gray-600 font-medium hover:border-black transition ease-in-out duration-300"
          >
            Visit
          </a>
        </div>
        <div className="space-y-3">
          <div
            aria-label="Production deployment"
            className="flex items-center space-x-3"
          >
            <Link href="#">
              <a className="inline-flex items center space-x-2 text-sm leading-5 font-medium">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-green-400"
                ></span>
                <span>{productionUrl}</span>
              </a>
            </Link>
            <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-sm leading-4 font-medium">
              Production
            </span>
            <span className="text-sm leading-5 text-gray-500">
              <time dateTime="2020-11-03">78d</time>
            </span>
          </div>
          <div
            aria-label="Production deployment"
            className="flex items-center space-x-3"
          >
            <Link href="#">
              <a className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                {errorInDev ? (
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-red-500"
                  ></span>
                ) : (
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-green-400"
                  ></span>
                )}
                <span>{previewUrl}</span>
              </a>
            </Link>
            <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-sm leading-4 font-medium">
              Latest
            </span>
            <span className="text-sm leading-5 text-gray-500">
              <time dateTime="2021-01-06">14d</time>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-3">
        <a
          href="#"
          className="inline-flex items-center space-x-1 text-sm leading-5 font-medium"
        >
          <GithubIcon className="h-4 w-4" />
          <span>{repo}</span>
        </a>
        <span className="text-sm leading-5 text-gray-500">
          Updated {days}d ago
        </span>
      </div>
    </div>
  );
}

function ActivitityFeedItem({ log, days }) {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4 text-sm leading-5">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1334604270256197639/6fMilNhQ_400x400.jpg"
          alt="Elias Moreno"
        />
        <span className="text-gray-600">{log}</span>
      </div>
      <div className="text-sm leading-5 text-gray-500">
        <span>{days}d</span>
      </div>
    </div>
  );
}

function AccountSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`${
            isOpen
              ? "border-gray-200 text-black"
              : "border-transparent text-gray-400"
          } inline-flex items-center border rounded p-0.5 hover:border-gray-200 hover:bg-gray-50 focus-outline:none focus:text-black focus: border-gray-200 focus:bg-gray-50 transition ease-in-out duration-150`}
        >
          <SelectorIcon className="h-5 w-5 " />
        </button>
      </span>
      {isOpen && (
        <div className="absolute w-60 max-w-xs rounded-md bg-white dicide-y divide-gray-200 shadow-lg overflow-hidden">
          <div className="py-2">
            <div className="pt-5 px-4 pb-2 text-sm uppercase tracking-wide text-gray-500">
              Personal Account
            </div>
            <ul>
              <li className="px-4 py-3 bg-gray-50">
                <div className="flex items-center justify-between space-x-4">
                  <Link href="#">
                    <a className="flex items-center justify-between space-x-4 text-sm leading-5 hover:text-black transition ease-in-out duration-200">
                      <Avatar
                        src="https://pbs.twimg.com/profile_images/1334604270256197639/6fMilNhQ_400x400.jpg"
                        alt="Elias Moreno"
                        size="sm"
                      />
                      <span className="text-gray-500">Elias Moreno</span>
                    </a>
                  </Link>
                  <div>
                    <Link href="#">
                      <a className="text-gray-300 hover:text-black transition ease-in-out duration-200">
                        <CogIcon className="h-5 w-5 text-gray-400" />
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-2">
            <Link href="#">
              <a className="px-5 py-3 flex items-center justify-between leading-5 text-sm text-gray-500 hover:text-black transition ease-in-out duration-200">
                <span>Create a Team</span>
                <PlusIcon className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
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
              <AccountSwitcher />
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
                    <GithubIcon className="h-4 w-4" />
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
      <div className="border-t border-gray-200 pb-10">
        <main className="-mt-9 max-w-5xl mx-auto grid grid-cols-12 gap-20">
          <div className="col-span-7">
            <h2 className="sr-only">Recent Projects</h2>
            <div className="space-y-12">
              <ul className="space-y-12">
                <li>
                  <ProjectCard
                    project="fastfeedback"
                    productionUrl="fastfeedback-beta.vercel.app"
                    previewUrl="fastfeedback-2k3af6jb4.vercel.app"
                    repo="Eliascm17/React-2025--Tutorial"
                    days="14"
                    errorInDev
                  />
                </li>
                <li>
                  <ProjectCard
                    project="eliasmdotdev"
                    productionUrl="eliasm.dev"
                    previewUrl="eliasmdotdev-9u36quf5z.vercel.app"
                    repo="Eliascm17/eliasm.dev"
                    days="41"
                  />
                </li>
                <li>
                  <ProjectCard
                    project="cs4331-project"
                    productionUrl="cs4331-project.vercel.app"
                    previewUrl="cs4331-project-r628spkxf.vercel.app"
                    repo="Eliascm17/musicRecommender"
                    days="41"
                  />
                </li>
              </ul>
              <div>
                <Link href="#">
                  <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                    View All Projects
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-9 col-span-5 pt-1">
            <h2 className="text-sm leading-5 font-bold">Recent Activity</h2>
            <ul className="border-b border-gray-200 divide-y divide-gray-200">
              <li className="py-3">
                <ActivitityFeedItem log="You logged into Github" days="14" />
              </li>
              <li className="py-3">
                <ActivitityFeedItem
                  log="You added Production, Preview, Development Environment Variable FIREBASE_PRIVATE_KEY to Project fastfeedback"
                  days="14"
                />
              </li>
              <li className="py-3">
                <ActivitityFeedItem
                  log="You added Production, Preview Environment Variable FIREBASE_PRIVATE_KEY to Project fastfeedback"
                  days="14"
                />
              </li>
              <li className="py-3">
                <ActivitityFeedItem
                  log="You added secret firebase_private_key"
                  days="14"
                />
              </li>
            </ul>
            <div>
              <Link href="#">
                <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                  View All Activity
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

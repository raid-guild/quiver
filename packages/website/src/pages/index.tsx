import Link from '@docusaurus/Link';
import React from 'react';
const pkg = require('../../../quiver/package.json');

const Home: React.FC = () => {
    return (
        <div className="bg-zinc-900 min-h-screen bg-arrow-bg bg-center md:bg-top bg-cover bg-no-repeat">
            <div className="p-8 sm:pl-16 md:pl-32 pt-10 md:pt-40 font-mono max-w-lg sm:max-w-xl md:max-w-2xl">
                <div className="flex space-x-4">
                    <img
                        src="/quiver/img/quiver-logo-white.png"
                        alt="Quiver logo"
                        className="h-12 w-auto"
                    />
                    <p className="text-xs p-1 rounded bg-raidRed bg-opacity-20 self-center">
                    {`v${pkg.version}`}
                    </p>
                </div>
                <p className="text-lg py-6">
                    A collection of React hooks and components for Ethereum
                    dApps
                </p>
                <div className="flex flex-col space-y-12">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 md:align-top  transition">
                        <pre className="text-sm">
                            yarn add @raidguild/quiver ethers web3modal
                        </pre>
                        <button className="p-2 border-2 rounded-md hover:bg-raidRed hover:bg-opacity-60 hover:backdrop-blur-sm">
                            <div className="flex justify-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>Copy</span>
                            </div>
                        </button>
                    </div>
                    <div>
                        <p>Powered by</p>
                        <ul className="list-disc">
                            <li>
                                <span className="text-raidRed">ethers</span> -
                                for ethereum functionality.
                            </li>
                            <li>
                                <span className="text-raidRed">Web3Modal</span>{' '}
                                - to connect to wallets
                            </li>
                            <li>
                                <span className="text-raidRed">TypeChain</span>{' '}
                                - for TypeScript out of the box, including
                                fully-typed contracts.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <Link
                            href="https://github.com/raid-guild/quiver"
                            className="hover:no-underline hover:opacity-80 hover:-translate-y-2 transition-transform"
                        >
                            <button className="flex justify-center space-x-3 text-white bg-gradient-to-r from-raidRed to-raidPurple p-3 rounded-sm">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        version="1.1"
                                        viewBox="-1163 1657.697 56.693 56.693"
                                        xmlSpace="preserve"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M-1134.66 1662.916c-13.6 0-24.63 11.027-24.63 24.63 0 10.882 7.057 20.115 16.844 23.371 1.23.228 1.683-.534 1.683-1.184 0-.587-.023-2.528-.034-4.586-6.852 1.49-8.298-2.906-8.298-2.906-1.12-2.847-2.734-3.604-2.734-3.604-2.235-1.529.168-1.497.168-1.497 2.473.173 3.776 2.538 3.776 2.538 2.196 3.765 5.761 2.677 7.167 2.047.221-1.591.86-2.678 1.564-3.293-5.47-.623-11.222-2.735-11.222-12.172 0-2.69.962-4.886 2.538-6.611-.256-.62-1.099-3.126.239-6.519 0 0 2.068-.661 6.774 2.525 1.965-.545 4.072-.82 6.165-.829 2.093.01 4.202.284 6.17.83 4.701-3.187 6.767-2.526 6.767-2.526 1.34 3.393.497 5.898.241 6.519 1.58 1.725 2.535 3.922 2.535 6.61 0 9.46-5.762 11.544-11.246 12.153.883.765 1.67 2.264 1.67 4.561 0 3.296-.028 5.948-.028 6.76 0 .655.443 1.423 1.691 1.181 9.782-3.26 16.83-12.49 16.83-23.368 0-13.603-11.027-24.63-24.63-24.63z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path d="M-1149.961 1698.28c-.054.122-.247.159-.422.075-.18-.08-.28-.248-.221-.37.053-.126.245-.161.424-.077.179.08.28.249.219.371zm-.303-.225M-1148.963 1699.392c-.118.109-.348.058-.504-.114-.16-.172-.19-.401-.071-.512.12-.108.343-.057.505.114.16.174.192.402.07.512zm-.235-.252M-1147.992 1700.81c-.151.106-.398.007-.55-.212-.152-.219-.152-.482.003-.587.152-.105.396-.01.55.207.15.223.15.485-.003.592zm0 0M-1146.662 1702.181c-.135.15-.423.109-.633-.094-.215-.199-.275-.48-.14-.63.137-.149.426-.107.638.095.214.198.279.482.135.63zm0 0M-1144.826 1702.977c-.06.193-.337.28-.616.198-.279-.084-.46-.31-.405-.505.058-.194.337-.285.617-.198.279.084.461.309.404.505zm0 0M-1142.81 1703.124c.006.203-.23.372-.523.375-.295.007-.533-.157-.536-.357 0-.205.23-.372.525-.377.293-.006.533.158.533.36zm0 0M-1140.935 1702.805c.035.198-.169.402-.46.456-.285.053-.55-.07-.586-.267-.036-.203.171-.406.457-.459.291-.05.552.069.589.27zm0 0"></path>
                                    </svg>
                                </span>
                                <p>View GitHub</p>
                            </button>
                        </Link>
                        <Link
                            href="/introduction"
                            className="hover:no-underline hover:opacity-80 hover:-translate-y-2 transition-transform"
                        >
                            <button className="flex justify-center space-x-3 text-white bg-gradient-to-br from-raidPurple to-raidRed p-3 rounded-sm">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <p>Read docs</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

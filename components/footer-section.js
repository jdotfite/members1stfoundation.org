import Image from "next/image";
import Link from "next/link";

export default function FooterSection({ mainMenu }) {
    const links = mainMenu.map(link => ({
        ...link,
        url: link.url[0] === "#" ? `/${link.url}` : link.url
    }));

    return (
        <footer className="bg-color-tone-7 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
            <div className="container">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-lg font-semibold tracking-tight xl:text-1xl">
                            Subscribe to receive updates.
                        </h1>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <label className="sr-only" htmlFor="email">Email Address</label>
                            <input className="" id="email" placeholder="Email Address" type="text" />
                            <button className="btn btn-outline btn-ripple">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold dark:text-white">Learn More</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            {links.map((link) => (
                                <Link key={link.url} href={link.url} className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Make a Difference</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="/donate" className="transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                                Donate
                            </Link>
                            <Link href="/contact" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <p className="text-xs">
                    The Members 1st Charitable Foundation is an independent 501 (c)(3) non-profit
                    corporation whose mission is to support local, grassroots organizations within South Central and Northeastern
                    Pennsylvania to make them stronger, healthier, and more financially sound. Founded by
                    Members 1st Federal Credit Union in 2021, the Foundation receives ongoing support from the Credit Union, as well
                    as donors and members from the communities which it supports.
                </p>
            </div>
        </footer>
    );
}
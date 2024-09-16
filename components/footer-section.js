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
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4  sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input className="block p-3 pl-10 w-full border border-black border-2 text-sm text-gray-900  border rounded-tr-none rounded-br-none  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                                </div>
                                <div>
                                <button type="submit" className="btn btn-outline">Subscribe</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                            </form>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <label className="sr-only" htmlFor="email">Email Address</label>
                            <input className="" id="email" placeholder="Email Address" type="text" />
                            <button className="btn btn-outline btn-ripple">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 transition-colors duration-300 dark:text-gray-200">Learn More</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            {links.map((link) => (
                                <Link key={link.url} href={link.url} className="text-gray-600 transition-colors duration-300 dark:text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 transition-colors duration-300 dark:text-gray-200">Make a Difference</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="/donate" className="text-gray-600 transition-colors duration-300 dark:text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                                Donate
                            </Link>
                            <Link href="/contact" className="text-gray-600 transition-colors duration-300 dark:text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
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
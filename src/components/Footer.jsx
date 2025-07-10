import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black px-6 py-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Email Subscription */}
                <div>
                    <h2 className="font-bold text-lg mb-4">Subscribe to our email alerts!</h2>
                    <div className="flex items-center bg-gray-200 rounded-md overflow-hidden w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-2 bg-transparent outline-none text-sm"
                        />
                        <button className="bg-gray-300 p-2">
                            <IoIosArrowForward className="text-black text-xl" />
                        </button>
                    </div>
                </div>

                {/* Shop */}
                <div>
                    <h3 className="font-semibold mb-4">Shop</h3>
                    <ul className="space-y-2 text-sm">
                        <li>True Wireless Earbuds</li>
                        <li>Wired Headphones</li>
                        <li>Home Audio</li>
                        <li>Smart Watches</li>
                        <li>Misfit Trimmers</li>
                        <li>Wireless Headphones</li>
                        {/* <li>Wireless Speakers</li>
            <li>Mobile Accessories</li>
            <li>TRebel</li>
            <li>Refer & Earn</li> */}
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="font-semibold mb-4">Help</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Track Your Order</li>
                        <li>Warranty & Support</li>
                        <li>Return Policy</li>
                        <li>Service Centers</li>
                        <li>Bulk Orders</li>
                        <li>Why Buy Direct</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About boAt</li>
                        <li>News</li>
                        <li>Read Our Blog</li>
                        <li>Careers</li>
                        <li>Investor Relations</li>
                        <li>Social Responsibility</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

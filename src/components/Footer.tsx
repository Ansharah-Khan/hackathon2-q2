


const Footer = () => {
    return (
        <footer className="py-4 px-8 mx-auto bg-white">
            <div className="py-4 px-6 mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                {/* Funiro section */}
                <div className="flex flex-col space-y-4">
                    <div className="font-bold text-4xl">Funiro.</div>
                    <div className="text-sm text-gray-400">
                        Make it responsive
                        <ul className="my-4">
                            <li>400 University Drive Suite 200 Coral</li>
                            <li>Gables,</li>
                            <li>FL 33134 USA</li>
                        </ul>
                    </div>
                </div>

                {/* Links section */}
                <div className="space-y-4">
                    <div className="text-gray-400">Links</div>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Help section */}
                <div className="space-y-4">
                    <div className="text-gray-400">Help</div>
                    <ul className="space-y-2">
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>

                {/* Newsletter section */}
                <div className="space-y-4">
                    <div className="text-gray-400">Newsletter</div>
                    <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        className="border-b-2 border-gray-500 bg-transparent py-2 px-4 w-full"
                    />
                    <input
                        type="text"
                        placeholder="SUBSCRIBE"
                        className="border-b-2 border-gray-500 bg-transparent  py-2 px-4 w-full"
                    />
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-500 my-6" />

            {/* Footer Text */}
            <div className="text-start text-sm text-gray-400">
                2023 Funiro. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

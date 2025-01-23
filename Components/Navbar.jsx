import Link from 'next/link';
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <header className="bg-blue-600 py-3 font-semibold text-white ">
            <div className='max-w-5xl px-4 sm:px-8 mx-auto flex justify-between items-center'>
                {/* Links Section */}
                <nav className="flex space-x-4">
                    <Link href="/">
                        <h3 className="hover:underline">Home</h3>
                    </Link>
                    <Link href="/profile">
                        <h3 className="hover:underline">Profile</h3>
                    </Link>
                </nav>

                {/* Authentication Buttons */}
                <div>
                    {user ? (
                        <LogoutLink>
                            <button

                                className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </LogoutLink>
                    ) : (
                        <LoginLink>
                            <button

                                className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
                            >
                                Login
                            </button>
                        </LoginLink>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;

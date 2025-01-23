

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected() {
    const { isAuthenticated } = getKindeServerSession();

    return (await isAuthenticated()) ? (
        <div className="bg-slate-100">
            <div className="max-w-5xl mx-auto h-screen py-10 px-3 sm:px-8">
                <h1>Welcome to Your Profile!</h1>
            </div>
        </div>
    ) : (
        <div className="bg-slate-100">
            <div className="max-w-5xl mx-auto h-screen py-10 px-3 sm:px-8">
                please <LoginLink className="bg-blue-500 hover:bg-blue-600 rounded-lg px-3 py-1 text-white cursor-pointer">Login</LoginLink> first.
            </div>
        </div>
    );
}
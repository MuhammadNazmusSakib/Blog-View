

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected() {
    const { isAuthenticated } = getKindeServerSession();

    return (await isAuthenticated()) ? (
        <div className="max-w-5xl mx-auto py-10">
            <h1>Welcome to Your Profile!</h1>
        </div>
    ) : (
        <div className="max-w-5xl mx-auto py-10">
            This page is protected, please <LoginLink className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 text-white cursor-pointer">Login</LoginLink> to view it
        </div>
    );
}
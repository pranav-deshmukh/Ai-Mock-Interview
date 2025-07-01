import { auth } from "@/auth";
import { logout } from "@/lib/actions/auth-actions";
import Image from "next/image";
import SignIn from "../signin/page";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow bg-white dark:bg-gray-950 border-b">
      <h1 className="text-xl font-bold text-primary">
        🎤 AI Interviewer
      </h1>

      {session?.user ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {session.user.image && (
              <Image
                src={session.user.image}
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <span className="text-sm font-medium">
              {session.user.name}
            </span>
          </div>

          <form action={logout}>
            <button
              type="submit"
              className="text-sm px-3 py-1.5 bg-muted rounded hover:bg-muted/70 border border-input"
            >
              Sign Out
            </button>
          </form>
        </div>
      
      ) : (
        <SignIn/>
      )}
    </nav>
  );
}

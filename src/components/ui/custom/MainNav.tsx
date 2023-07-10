import { signOut, signIn, useSession } from "next-auth/react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="mx-auto max-w-screen-xl">
      <nav>
        <div className="flex h-14 items-center justify-between space-x-4 lg:space-x-6">
          {/* primary nav */}
          <div className="flex space-x-4 lg:space-x-6">
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Overview
            </Link>
          </div>

          {/* secondary nav */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {user != null && (
              <Link
                href={`/profiles/${user.id}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Profile
              </Link>
            )}

            {user != null ? (
              <Button
                variant="default"
                onClick={() => void signOut()}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={() => void signIn()}
                className="text-sm font-medium"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
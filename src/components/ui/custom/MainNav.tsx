import { signOut, signIn, useSession } from "next-auth/react";
import { Button, Text } from "@radix-ui/themes";
import { DarkModeToggle } from "@/components/ui/custom/DarkModeToggle";
import { Bug } from "lucide-react";
import Link from "next/link";

export function MainNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="flex justify-center px-[20px] py-[15px]">
      <div className="w-full px-0">
        <div className="flex w-full items-center justify-between space-x-4 lg:space-x-6">
          {/* primary nav */}
          <div className="flex space-x-4 lg:space-x-6">
            <Link className="flex items-center gap-[2px]" href="/">
              <Bug className="h-8 w-8" />
              <Text as="span" size="4" weight="medium">
                BugWatch
              </Text>
            </Link>
          </div>

          {/* secondary nav */}
          <div className="flex items-center space-x-2">
            {user != null ? (
              <Button variant="surface" onClick={() => void signOut()}>
                Sign Out
              </Button>
            ) : (
              <Button variant="surface" onClick={() => void signIn()}>
                Sign In
              </Button>
            )}
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

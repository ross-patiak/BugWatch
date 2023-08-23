import { Button, buttonVariants } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  Star,
  UserCircle2,
  Kanban,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SideNav() {
  return (
    <nav className="sticky top-0 basis-[17%] px-4 py-6">
      <div className="flex w-[250px] flex-col space-y-1">
        <Link
          className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          href="/"
        >
          <LayoutDashboard />
          Dashboard
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          href="/users"
        >
          <Users />
          Users
        </Link>

        <Link
          className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          href="/tickets"
        >
          <Kanban />
          Tickets
        </Link>
        <Button variant="ghost" className="justify-start">
          <Star />
          Projects?
        </Button>
        <Button variant="ghost" className="justify-start">
          <UserCircle2 />
          My Profile
        </Button>
      </div>
    </nav>
  );
}

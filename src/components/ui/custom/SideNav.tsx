import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  Star,
  UserCircle2,
  Kanban,
} from "lucide-react";

export function Sidebar() {
  return (
    <nav className="sticky top-0 px-4 py-6">
      <div className="flex w-[250px] flex-col space-y-1">
        <Button variant="secondary" className="justify-start">
          <LayoutDashboard />
          Dashboard
        </Button>
        <Button variant="ghost" className="justify-start">
          <Users />
          Users
        </Button>
        <Button variant="ghost" className="justify-start">
          <Kanban />
          Tickets
        </Button>
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

import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Home,
  Users,
  Star,
  MessageSquare,
  UserCircle2,
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
          <Home />
          Property
        </Button>
        <Button variant="ghost" className="justify-start">
          <Users />
          Agent
        </Button>
        <Button variant="ghost" className="justify-start">
          <Star />
          Review
        </Button>
        <Button variant="ghost" className="justify-start">
          <MessageSquare />
          Message
        </Button>
        <Button variant="ghost" className="justify-start">
          <UserCircle2 />
          My Profile
        </Button>
      </div>
    </nav>
  );
}

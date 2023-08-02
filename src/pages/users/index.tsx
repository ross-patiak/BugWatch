import CreateUserButton from "@/components/ui/custom/CreateUserButton";

import { type NextPage } from "next";

const TicketsPage: NextPage = () => {
  //TODO: make title, content, etc required/optional
  return (
    <div className="flex">
      <CreateUserButton className="self-end" />
    </div>
  );
};

export default TicketsPage;

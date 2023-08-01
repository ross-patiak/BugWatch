import CreateTicketButton from "@/components/ui/custom/CreateTicketButton";
import { TicketList } from "@/components/ui/custom/TicketList";

import { type NextPage } from "next";

const TicketsPage: NextPage = () => {
  //TODO: make title, content, etc required/optional
  return (
    <div className="flex">
      <CreateTicketButton className="self-end" />
      <TicketList></TicketList>
    </div>
  );
};

export default TicketsPage;

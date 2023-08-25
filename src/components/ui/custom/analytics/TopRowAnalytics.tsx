import { api } from "@/utils/api";
import { type Ticket } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";

const numTicketsByStatus = (tstatus: string) => {
  const ticketsByStatus = api.ticket.getTicketsByStatus.useQuery({
    status: tstatus,
  });

  const data: Ticket[] = ticketsByStatus?.data as Ticket[];

  if (tstatus === "closed") {
    const today: string = new Intl.DateTimeFormat("en-US").format(new Date());

    const closedTicketsToday = data?.filter((ticket) => {
      const ticketDate = new Intl.DateTimeFormat("en-US").format(
        ticket.statusUpdatedAt
      );

      return ticketDate === today;
    });

    return closedTicketsToday?.length;
  }

  return data?.length;
};

const numTicketsUnassigned = () => {
  const unassignedTickets = api.ticket.getUnassignedTickets.useQuery();
  const data: Ticket[] = unassignedTickets.data as Ticket[];

  return data?.length;
};
//TODO: fix responsive stretching of cards
const TopRowAnalytics = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-6">
      <Card className="w-[calc((100%-3*24px)/4)] min-w-[21%] grow">
        <Flex className="px-3 py-1" direction="column">
          <Text className="pb-2" as="div" size="2">
            Currently Open
          </Text>

          <Text as="div" size="7" weight="bold" align="left">
            {numTicketsByStatus("open")}
            <Text size="2" weight="regular" ml="1">
              Tickets
            </Text>
          </Text>
        </Flex>
      </Card>

      <Card className="w-[calc((100%-3*24px)/4)] min-w-[21%] grow">
        <Flex className="px-3 py-1" direction="column">
          <Text className="pb-2" as="div" size="2">
            Closed Today
          </Text>

          <Text as="div" size="7" weight="bold" align="left">
            {numTicketsByStatus("closed")}
            <Text size="2" weight="regular" ml="1">
              Tickets
            </Text>
          </Text>
        </Flex>
      </Card>

      <Card className="w-[calc((100%-3*24px)/4)] min-w-[21%] grow">
        <Flex className="px-3 py-1" direction="column">
          <Text className="pb-2" as="div" size="2">
            In Progress
          </Text>

          <Text as="div" size="7" weight="bold" align="left">
            {numTicketsByStatus("in progress")}
            <Text size="2" weight="regular" ml="1">
              Tickets
            </Text>
          </Text>
        </Flex>
      </Card>

      <Card className="w-[calc((100%-3*24px)/4)] min-w-[21%] grow">
        <Flex className="px-3 py-1" direction="column">
          <Text className="pb-2" as="div" size="2">
            Unassigned
          </Text>

          <Text as="div" size="7" weight="bold" align="left">
            {numTicketsUnassigned()}
            <Text size="2" weight="regular" ml="1">
              Tickets
            </Text>
          </Text>
        </Flex>
      </Card>
    </div>
  );
};

export default TopRowAnalytics;

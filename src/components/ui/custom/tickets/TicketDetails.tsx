import { api } from "@/utils/api";
import { Badge, Card, Code, Heading, Text, Avatar } from "@radix-ui/themes";
import {
  categoryMap,
  priorityMap,
  type badgeColor,
  statusMap,
} from "@/lib/utils";

type TicketDetailsProps = {
  ticketId: string;
};

const TicketDetails = ({ ticketId }: TicketDetailsProps) => {
  const getTicket = api.ticket?.getTicket?.useQuery({
    ticketId: ticketId,
  });
  const ticketData = getTicket?.data;

  const getEmployee = api.employee?.getEmployee.useQuery({
    employeeId: ticketData?.employeeId as string,
  });
  const employeeName: string = getEmployee?.data?.name as string;
  const image: string = getEmployee?.data?.image as string;

  return (
    <Card size="3">
      <div className="flex flex-col gap-12 px-4 py-4">
        {/** top half */}
        <div className="flex flex-col gap-3">
          {/** top half - 1 */}
          <div>
            <div className="flex grow flex-row justify-between">
              <Heading size="7">{ticketData?.title}</Heading>
              <Badge
                size="2"
                radius="full"
                color={
                  priorityMap.get(ticketData?.priority as string)
                    ?.color as badgeColor
                }
              >
                {priorityMap.get(ticketData?.priority as string)?.value}
              </Badge>
            </div>

            <Text as="div" size="3" color="gray">
              id: {ticketId}
            </Text>

            {ticketData?.category != "undefined" &&
            ticketData?.category != null ? (
              <Badge
                size="1"
                color={
                  categoryMap.get(ticketData?.category)?.color as badgeColor
                }
              >
                {categoryMap.get(ticketData?.category)?.value}
              </Badge>
            ) : null}
          </div>

          {/** top half - 2 */}
          <div className="flex flex-col gap-2">
            <Text as="div" size="3">
              Status:{" "}
              <Code
                variant="soft"
                color={
                  statusMap.get(ticketData?.status as string)
                    ?.color as badgeColor
                }
                size="3"
              >
                {statusMap.get(ticketData?.status as string)?.value}
              </Code>
            </Text>
            <div className="flex flex-row items-center gap-2">
              <Text as="div" size="3">
                Assigned To:
              </Text>
              <>
                <Avatar
                  src={image}
                  radius="full"
                  fallback={employeeName?.charAt(0).toUpperCase()}
                  color="indigo"
                  size="3"
                />
                {employeeName}
              </>
            </div>
          </div>
        </div>

        {/** bottom half */}
        <div className="mb-11 flex grow flex-col gap-3">
          <Heading size="5">Description</Heading>
          <div>{ticketData?.content}</div>
        </div>
      </div>
    </Card>
  );
};

export default TicketDetails;

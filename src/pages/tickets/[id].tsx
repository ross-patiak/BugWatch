import { api } from "@/utils/api";
import { type Ticket } from "@prisma/client";
import { type Employee } from "@prisma/client";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TicketDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const getTicket = api.ticket?.getTicket?.useQuery({
    ticketId: id as string,
  });
  const data: Ticket = getTicket?.data as Ticket;

  const getEmployee = api.employee?.getEmployee.useQuery({
    employeeId: data?.employeeId as string,
  });
  const employeeName: string = getEmployee?.data?.name as string;
  const image: string = getEmployee?.data?.image as string;

  return (
    <div>
      <p>Ticket Details</p>
      <Card>
        <CardTitle></CardTitle>
        <CardContent>
          <div className="flex flex-col">
            {/** top part */}
            <div className="flex grow flex-row justify-between pb-3">
              <div className="mb-3">
                <div>{data?.title}</div>
                <div>ID: {id}</div>
                <div>Status: {data?.status}</div>
                <div className="mb-5 flex flex-row">
                  <p>Assign To: &nbsp;</p>
                  <>
                    <Avatar>
                      <AvatarImage src={image} alt="Profile pic of this user" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {employeeName}{" "}
                  </>
                </div>
              </div>
              <div className="flex flex-row"></div>
              Edit
            </div>
          </div>
          <div className="flex grow flex-col">
            <div className="pb-4">
              <p> Ticket Description: &nbsp;</p>
            </div>
            {data?.content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketDetailsPage;

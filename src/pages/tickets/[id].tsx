import { type NextPage } from "next";
import { useRouter } from "next/router";
import TicketDetails from "@/components/ui/custom/tickets/TicketDetails";
import { Button, Heading } from "@radix-ui/themes";
import { Pencil } from "lucide-react";

const TicketDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="mx-7 my-7 flex flex-col">
      <div className="flex items-center justify-between pb-5">
        <Heading>Ticket Details</Heading>
        <Button variant="surface" color="iris">
          <Pencil size={15} />
          Edit
        </Button>
      </div>

      <TicketDetails ticketId={id as string} />
    </div>
  );

  // return (
  //   <div className="mx-7 my-7 flex-col">
  //     <div className="flex items-center justify-between pb-5">
  //       <Heading>Ticket Details</Heading>
  //       <Button variant="soft">Edit</Button>
  //     </div>

  //     <div>
  //       <p>Ticket Details</p>
  //       <Card>
  //         <CardTitle></CardTitle>
  //         <CardContent>
  //           <div className="flex flex-col">
  //             {/** top part */}
  //             <div className="flex grow flex-row justify-between pb-3">
  //               <div className="mb-3">
  //                 <div>{data?.title}</div>
  //                 <div>ID: {id}</div>
  //                 <div>Status: {data?.status}</div>
  //                 <div className="mb-5 flex flex-row">
  //                   <p>Assign To: &nbsp;</p>
  //                   <>
  //                     <Avatar>
  //                       <AvatarImage
  //                         src={image}
  //                         alt="Profile pic of this user"
  //                       />
  //                       <AvatarFallback>CN</AvatarFallback>
  //                     </Avatar>
  //                     {employeeName}{" "}
  //                   </>
  //                 </div>
  //               </div>
  //               <div className="flex flex-row"></div>
  //               Edit
  //             </div>
  //           </div>
  //           <div className="flex grow flex-col">
  //             <div className="pb-4">
  //               <p> Ticket Description: &nbsp;</p>
  //             </div>
  //             {data?.content}
  //           </div>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   </div>
  // );
};

export default TicketDetailsPage;

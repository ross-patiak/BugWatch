import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { MoreVertical, MoveRight } from "lucide-react";

type DashboardCardProps = {
  type: "property-referrals" | "latest-sales" | "customer" | "top-agents";
};

const DashboardCard = ({ type }: DashboardCardProps) => {
  let res: JSX.Element;

  if (type == "property-referrals") {
    //TODO: use api to generate passable data from db (json format?)
    const data = [
      {
        title: "Social Media",
        percentage: 64,
        color: "#6C5DD3",
      },
      {
        title: "Marketplace",
        percentage: 40,
        color: "#7FBA7A",
      },
      {
        title: "Websites",
        percentage: 50,
        color: "#FFCE73",
      },
      {
        title: "Digital Ads",
        percentage: 80,
        color: "#FFA2C0",
      },
      {
        title: "Others",
        percentage: 15,
        color: "#F45252",
      },
    ];

    const dataEntryView = data.map((item) => (
      <div key={item.title}>
        <div className="flex justify-between pb-[10px]">
          <div>{item.title}</div>
          <div>{item.percentage}%</div>
        </div>
        <div className="pb-[15px]">
          <Progress value={item.percentage} color={item.color}></Progress>
        </div>
      </div>
    ));

    res = (
      <div className="flex flex-col rounded-[10px] bg-[#1A1D1F] px-5 pb-[5px] pt-5">
        <div>Property Referrals</div>
        <div className="flex flex-col">{dataEntryView}</div>
      </div>
    );

    return res;
  }

  if (type == "top-agents") {
    //TODO: use api to generate passable data from db (json format?)
    const data = [
      {
        name: "Benny Chagur",
      },
      {
        name: "John Johnson",
      },
      {
        name: "David Yers",
      },
      {
        name: "Guy Ritchie",
      },
    ];

    const dataEntryView = data.map((item) => (
      <div key={item.name} className="flex justify-between">
        <div className="flex">
          <div>Profile Pic</div>
          <div className="flex flex-col">
            <div>{item.name}</div>
            <div>Top Agent</div>
          </div>
        </div>

        {/* TODO: add box to go to profile */}
        <MoreVertical />
      </div>
    ));

    res = (
      <div className="flex flex-col rounded-[10px] bg-[#1A1D1F] px-5 pb-[5px] pt-5">
        <div className="flex justify-between">
          <div>Top Agents</div>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="http://localhost:3000"
          >
            View All
          </Link>
        </div>

        <div className="flex flex-col">{dataEntryView}</div>
      </div>
    );

    return res;
  }

  if (type == "customer") {
    //TODO: use api to generate passable data from db (json format?). Think about this one in particular, prob tricky backend involved
    const data = [
      {
        title: "Total Customers",
        value: "507k",
        percentage: "21.77%",
      },
      {
        title: "New Customers This Month",
        value: "12k",
        percentage: "21.77%",
      },
    ];

    const dataEntryView = data.map((item) => (
      <div key={item.title} className="flex flex-col">
        <div>{item.title}</div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>{item.value}</div>
            <div>{item.percentage}</div>
          </div>

          <div>GRAPH</div>
        </div>
      </div>
    ));

    res = (
      <div className="flex flex-col rounded-[10px] bg-[#1A1D1F] px-5 pb-[5px] pt-5">
        <div>Customer</div>
        <div className="flex flex-col">{dataEntryView}</div>
      </div>
    );

    return res;
  }

  if (type == "latest-sales") {
    //TODO: use api to generate passable data from db (json format?)
    const data = [
      {
        name: "House 1",
        location: "Location, Country",
      },
      {
        name: "House 2",
        location: "Location, Country",
      },
      {
        name: "House 3",
        location: "Location, Country",
      },
      {
        name: "House 4",
        location: "Location, Country",
      },
    ];

    const dataEntryView = data.map((item) => (
      <div key={item.name} className="flex justify-between">
        <div className="flex">
          <div>House Pic</div>
          <div className="flex flex-col">
            <div>{item.name}</div>
            <div>{item.location}</div>
          </div>
        </div>

        {/* TODO: figure out what to do with these prices */}
        <div>+$35</div>
      </div>
    ));

    res = (
      <div className="flex flex-col rounded-[10px] bg-[#1A1D1F] px-5 pb-[5px] pt-5">
        <div className="flex justify-between">
          <div>Latest Sales</div>
          <MoveRight />
        </div>

        <div className="flex flex-col">{dataEntryView}</div>
      </div>
    );

    return res;
  }

  //final return
  return null;
};

export default DashboardCard;

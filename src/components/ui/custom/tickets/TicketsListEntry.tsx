"use client";

import { type Ticket } from "@prisma/client";
// import { type employeesWithTicketsType } from "@/components/ui/custom/users/EmployeesList";
import { Card, Text, Badge, DropdownMenu, Button } from "@radix-ui/themes";
import { MoreVertical, Trash2, Pencil, MessageSquare } from "lucide-react";
import Link from "next/link";
import { categoryMap, type badgeColor } from "@/lib/utils";

type TicketsListEntryProps = {
  ticket: Ticket;
};

const TicketsListEntry = ({ ticket }: TicketsListEntryProps) => {
  const { id, title, content, category } = ticket;

  return (
    <Card size="2" asChild>
      <Link href={`/tickets/${id}`}>
        <div className="flex h-full grow pl-2">
          <div className="flex grow flex-col justify-between">
            {/* top part */}
            <div className="mb-3 flex flex-col gap-1">
              <Text as="div" size="5" weight="medium">
                {title}
              </Text>

              {category != "undefined" && category != null ? (
                <Badge
                  className="max-w-fit"
                  variant="soft"
                  color={categoryMap?.get(category)?.color as badgeColor}
                >
                  {categoryMap?.get(category)?.value}
                </Badge>
              ) : null}
            </div>

            {/* bottom part */}
            <div className="flex flex-col gap-3">
              <Text as="div" size="2">
                {content}
              </Text>

              <Text
                className="flex items-center gap-1"
                color="gray"
                as="div"
                size="1"
              >
                <MessageSquare size={14} />0 Comments
              </Text>
            </div>
          </div>

          {/*second half*/}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" radius="large" highContrast color="gray">
                <MoreVertical />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant="soft">
              <DropdownMenu.Item className="gap-1">
                Edit
                <Pencil size={15} />
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item className="flex gap-2" color="red">
                Delete
                <Trash2 size={16} />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </Link>
    </Card>
  );
};

export default TicketsListEntry;

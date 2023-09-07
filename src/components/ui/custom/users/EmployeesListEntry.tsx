"use client";

import { type employeesWithTicketsType } from "@/lib/prismaTypes";
import {
  Card,
  Text,
  Avatar,
  Inset,
  Badge,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import { FolderKanban, Mail, MoreVertical, Trash2, Pencil } from "lucide-react";
import Link from "next/link";

type EmployeesListEntryProps = {
  employee: employeesWithTicketsType;
};

const EmployeesListEntry = ({ employee }: EmployeesListEntryProps) => {
  const { id, name, email, image, userRole, tickets } = employee;

  return (
    <Card size="2" asChild>
      <Link href={`/users/${id}`}>
        <div className="flex">
          <Inset className="basis-[35%]" side="left" pr="current">
            <div className="flex h-full items-center justify-center">
              <Avatar
                src={image as string}
                radius="medium"
                fallback={name?.charAt(0).toUpperCase() as string}
                color="indigo"
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </Inset>

          <div className="flex grow flex-col justify-between pl-2">
            {/* top part */}
            <div className="mb-3 flex flex-col">
              <Badge
                className="mb-2 max-w-fit"
                variant="soft"
                color={userRole === "Developer" ? "green" : "indigo"}
              >
                {userRole}
              </Badge>
              <Text as="div" size="4" weight="medium">
                {name}
              </Text>
              <Text
                className="flex items-center gap-1"
                color="gray"
                as="div"
                size="2"
              >
                <Mail size={15} />
                {email}
              </Text>
            </div>

            {/* bottom part */}
            <div className="flex flex-row">
              <div className="flex flex-col">
                <Text className="flex items-center gap-1" as="div" size="2">
                  <FolderKanban size={17} className="mb-[1px]" />
                  {tickets.length === 1
                    ? `${tickets.length} Assigned Ticket`
                    : `${tickets.length} Assigned Tickets`}
                </Text>
              </div>
            </div>
          </div>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" radius="large" color="gray" highContrast>
                <MoreVertical />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant="solid">
              <DropdownMenu.Item className="gap-1">
                Edit
                <Pencil size={15} />
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item className="gap-2" color="red">
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

export default EmployeesListEntry;

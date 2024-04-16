import { statusMap } from "@/lib/utils";
import { Text, Select } from "@radix-ui/themes";

const TicketFilter = () => {
  return (
    <div className="flex items-center gap-2">
      <Text as="div" color="indigo" size="2">
        Filter
      </Text>
      <Select.Root size="2">
        <Select.Trigger placeholder="Status" radius="full" variant="surface" />
        <Select.Content>
          {[...statusMap.entries()].map((entry) => (
            <Select.Item key={entry[0]} value={entry[0]}>
              {entry[1].value}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default TicketFilter;

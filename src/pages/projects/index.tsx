import { Heading, Text, Link } from "@radix-ui/themes";
import Image from "next/image";

import { type NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <div className="mx-7 my-7 flex-col">
      <div className="flex flex-col items-center justify-center gap-14 pb-5">
        <div className="flex flex-col items-center">
          <Heading size="7" style={{ letterSpacing: "0.025em" }}>
            UNDER CONSTRUCTION
          </Heading>
          <Text as="div" color="gray">
            See its progress{" "}
            <Link
              href="https://bugwatch.notion.site/bugwatch-scrum-board-bc8a5541b06246ba99d4e9229002fbc8?pvs=4"
              target="_blank"
            >
              here
            </Link>
            !
          </Text>
        </div>

        <Image
          src="/assets/under_construction.jpg"
          width={500}
          height={500}
          alt="Under construction image"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

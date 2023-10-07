import { type NextPage } from "next";
import TopRowAnalytics from "@/components/ui/custom/analytics/TopRowAnalytics";
import MiddleRowAnalytics from "@/components/ui/custom/analytics/MiddleRowAnalytics";
import { Flex, Heading, Text, Link } from "@radix-ui/themes";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";
import { AlertCircle } from "lucide-react";

const Home: NextPage = () => {
  return (
    <div>
      <SignedIn>
        <div className="mx-7 my-7">
          <Heading className="pb-5" size="7">
            Dashboard
          </Heading>
          <Flex gap="5" direction="column">
            <TopRowAnalytics />
            <MiddleRowAnalytics />
          </Flex>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="grid h-[50vh] place-items-center">
          <div className="flex flex-col items-center gap-2">
            <Text
              className="flex items-center gap-1 pb-2"
              as="div"
              color="amber"
              size="2"
              align="center"
              weight="medium"
              style={{ letterSpacing: "0.05rem" }}
            >
              <AlertCircle size={20} /> This app is currently undergoing
              development. Check out dev progress{" "}
              <Link
                href="https://rosspatiak.notion.site/rosspatiak/bugwatch-scrum-board-bc8a5541b06246ba99d4e9229002fbc8"
                target="_blank"
              >
                here
              </Link>
              .
            </Text>
            <Heading size="8">Welcome to BugWatch</Heading>
            <Text as="div" color="gray">
              Please{" "}
              <SignInButton>
                <Link>sign in</Link>
              </SignInButton>{" "}
              to continue
            </Text>
          </div>
        </div>
      </SignedOut>
    </div>
  );
};

export default Home;

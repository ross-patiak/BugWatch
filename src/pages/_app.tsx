import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/ui/custom/ThemeProvider";
import { MainNav } from "@/components/ui/custom/MainNav";
import { SideNav } from "@/components/ui/custom/SideNav";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Bug Watchr</title>
        <meta
          name="description"
          content="This is a Bug Ticket Tracking Application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme grayColor="slate" radius="large">
          <main>
            <MainNav></MainNav>
            <div className="flex items-start">
              <SideNav></SideNav>
              <div className="min-h-screen flex-grow basis-[83%] rounded bg-[#F4F4F4] dark:bg-[#111315]">
                <Component {...pageProps} />
              </div>
            </div>
          </main>
        </Theme>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

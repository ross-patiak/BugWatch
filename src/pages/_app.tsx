import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/ui/custom/ThemeProvider";
import { MainNav } from "@/components/ui/custom/MainNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Bug Watch</title>
        <meta
          name="description"
          content="This is a Bug Ticket Tracking Application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MainNav></MainNav>

        <div className="container mx-auto flex">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

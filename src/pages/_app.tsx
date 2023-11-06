import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/ui/custom/ThemeProvider";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { MainNav } from "@/components/ui/custom/MainNav";
import { SideNav } from "@/components/ui/custom/SideNav";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>BugWatch</title>
        <meta
          name="description"
          content="This is a Bug Ticket Tracking Application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme grayColor="slate" radius="large">
          <main>
            <SignedIn>
              <MainNav />
            </SignedIn>

            <SignedOut>
              {router?.pathname !== "/signin" && <MainNav />}
            </SignedOut>
            <div className="flex items-start">
              <SignedIn>
                <SideNav />
              </SignedIn>

              <div className="min-h-screen flex-grow basis-[83%] rounded bg-[#F4F4F4] dark:bg-[#111315]">
                <Component {...pageProps} />
                <Toaster />
              </div>
            </div>
          </main>
        </Theme>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/playfair-display";
import Layout from "../layouts/layout";
const theme = extendTheme({
  fonts: {
    heading: "Playfair Display",
    body: "Playfair Display",
  },
});
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

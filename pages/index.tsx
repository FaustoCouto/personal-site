import type { NextPage } from 'next';
import Home from "./home";

import { ContextProvider } from "@context";

const Index: NextPage = () => (
  <ContextProvider>
    <Home />
  </ContextProvider>
);

export default Index;

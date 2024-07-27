"use client";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

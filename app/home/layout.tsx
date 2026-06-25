import type { ReactNode } from "react";
import HomeAuthenticatedLayout from "./HomeAuthenticatedLayout";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <HomeAuthenticatedLayout>{children}</HomeAuthenticatedLayout>;
}

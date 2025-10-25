import { ReactNode } from "react";
import { AuthLayout } from "../../features/auth/components/auth-layout";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};
export default Layout;

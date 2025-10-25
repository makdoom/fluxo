import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-muted min-h-svh flex flex-col justify-center items-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex justify-center gap-2">
          <Image src="/logo/logo.svg" width={30} height={30} alt="fluxo" />
          <span className="text-2xl font-semibold">Fluxo</span>
        </Link>

        {children}
      </div>
    </div>
  );
};

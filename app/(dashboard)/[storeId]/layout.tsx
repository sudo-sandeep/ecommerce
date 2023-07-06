import { auth } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

type Props = {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
};

const DashboardLayout = async ({ children, params: { storeId } }: Props) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: { id: storeId, userId: userId },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <div>
      <p>This is a navbar</p>
      {children}
    </div>
  );
};

export default DashboardLayout;

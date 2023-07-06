import prismadb from "@/lib/prismadb";
import React from "react";

type Props = {
  params: {
    storeId: string;
  };
};

const DashboardPage = async ({ params: { storeId } }: Props) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });
  return <div>Active Store :: {store?.name}</div>;
};

export default DashboardPage;

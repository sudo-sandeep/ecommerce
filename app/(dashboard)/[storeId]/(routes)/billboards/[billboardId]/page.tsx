import prismadb from "@/lib/prismadb";
import React from "react";
import BillboardForm from "./components/billboard-form";

type Props = {
  params: {
    billboardId: string;
  };
};

const BillboardPage = async ({ params: { billboardId } }: Props) => {
  const billboard = await prismadb.billboard.findUnique({
    where: { id: billboardId },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;

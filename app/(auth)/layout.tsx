export const metadata = {
  title: "Admin Dashboard Authentication",
  description: "Admin Dashboard Authentication",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid place-content-center h-full">{children}</div>;
}

export default function Layout({
  children,
  breadcrumb,
}: {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}) {
  return (
    <>
      <div>/(app) layout</div>
      {children}
      {breadcrumb}
    </>
  );
}

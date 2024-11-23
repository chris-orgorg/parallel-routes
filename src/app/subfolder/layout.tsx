export default function Layout({
  children,
  breadcrumb,
}: {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}) {
  return (
    <>
      <div>/subfolder layout</div>
      {children}
      {breadcrumb}
    </>
  );
}

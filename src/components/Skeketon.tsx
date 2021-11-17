// eslint-disable-next-line react/require-default-props
export default function Skeleton({
  color = "var(--skeletonColor)",
}: {
  color?: string;
}) {
  return <div className="skeleton" style={{ color }} />;
}

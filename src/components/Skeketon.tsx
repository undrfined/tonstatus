// eslint-disable-next-line react/require-default-props
export default function Skeleton({ color = "#F3F4F5" }: { color?: string }) {
  return <div className="skeleton" style={{ color }} />;
}

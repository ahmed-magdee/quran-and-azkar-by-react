function CircleAbsolute({
  width,
  leftOrRight,
}: {
  width: string;
  leftOrRight: string;
}) {
  return (
    <span
      className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-green-header dark:bg-white ${leftOrRight}`}
      style={{ width, height: width }}
    />
  );
}

export default CircleAbsolute;

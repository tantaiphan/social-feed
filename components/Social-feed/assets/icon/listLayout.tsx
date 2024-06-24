export const ListLayoutIcon = ({
  width,
  height,
  fill,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width || 64}
      height={height || 64}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M47 42a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V43a1 1 0 0 1 1-1h30Zm0-17a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V26a1 1 0 0 1 1-1h30Zm0-17a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h30Z"
      ></path>
    </svg>
  );
};

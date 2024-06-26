export const SliderLayoutIcon = ({
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
        d="M9 15h46a1 1 0 0 1 1 1v32a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1Zm17.5 39a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm21.802-22.693a1.016 1.016 0 0 1 1.455 0l2.64 2.71a2.126 2.126 0 0 1 0 2.967l-2.64 2.709c-.402.41-1.053.41-1.455 0a1.063 1.063 0 0 1 0-1.484l1.911-1.967a1.063 1.063 0 0 0 0-1.484l-1.911-1.967a1.063 1.063 0 0 1 0-1.484Zm-54.604 0c.403.41.403 1.074 0 1.484l-1.911 1.967a1.063 1.063 0 0 0 0 1.484l1.911 1.967c.403.41.403 1.074 0 1.484-.402.41-1.053.41-1.455 0l-2.64-2.71a2.127 2.127 0 0 1 0-2.967l2.64-2.709a1.016 1.016 0 0 1 1.455 0Z"
      ></path>
    </svg>
  );
};

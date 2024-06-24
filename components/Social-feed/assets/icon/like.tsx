export const LikeIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width || 16}
      height={height || 16}
      fill={fill || "#535353"}
    >
      <path
        fillRule="evenodd"
        d="M11.36 1.407A4.267 4.267 0 0 0 8.583 2.65l-.282.282-.283-.282a4.268 4.268 0 0 0-6.035 6.035l5.894 5.894a.6.6 0 0 0 .848 0l5.893-5.894A4.267 4.267 0 0 0 11.601 1.4l-.242.007ZM11.6 2.6a3.067 3.067 0 0 1 3.069 3.068l-.007.202a3.067 3.067 0 0 1-.892 1.967l-5.469 5.469-5.47-5.469A3.068 3.068 0 0 1 7.17 3.499l.707.706a.6.6 0 0 0 .848 0l.707-.706A3.067 3.067 0 0 1 11.6 2.6Z"
      ></path>
    </svg>
  );
};

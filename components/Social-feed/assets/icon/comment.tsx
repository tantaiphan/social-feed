export const CommentIcon = ({
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
        d="M8.389.7h-.422a7.176 7.176 0 0 0-3.229.759A7.262 7.262 0 0 0 .7 7.965l.008.34c.04.908.254 1.8.627 2.628l.039.08-.66 3.419-.013.097c-.024.416.313.765.701.691l3.512-.667-.176-.082a7.264 7.264 0 0 0 9.714-3.233 7.172 7.172 0 0 0 .782-3.275v-.387C15.026 3.833 12.068.902 8.389.701Zm-.423 1.32h.378-.015c3.091.17 5.539 2.593 5.706 5.597l-.001.348a5.751 5.751 0 0 1-.63 2.63c-1.02 2.024-3.125 3.313-5.437 3.314a6.07 6.07 0 0 1-2.732-.64l-.084-.034a.547.547 0 0 0-.266-.016l-2.814.534.522-2.698a.719.719 0 0 0-.063-.46 5.75 5.75 0 0 1-.63-2.628c.001-2.236 1.284-4.29 3.333-5.305a6.072 6.072 0 0 1 2.733-.641Z"
      ></path>
    </svg>
  );
};

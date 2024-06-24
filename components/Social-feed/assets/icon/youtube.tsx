export const YoutubeIcon = ({
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
      width={width || 24}
      height={height || 24}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-src="https://static.elfsight.com/icons/youtube.svg"
    >
      <path
        fillRule="evenodd"
        d="M12.04 4h.048l.366.002c1.562.008 6.694.063 8.146.418a2.78 2.78 0 0 1 1.94 2 29 29 0 0 1 .46 5.33 29 29 0 0 1-.46 5.25 2.78 2.78 0 0 1-1.94 2c-1.529.409-7.135.454-8.362.46h-.476c-1.227-.006-6.833-.051-8.362-.46a2.78 2.78 0 0 1-1.94-1.92A29 29 0 0 1 1 11.75a29 29 0 0 1 .46-5.29 2.78 2.78 0 0 1 1.94-2c1.452-.388 6.584-.449 8.146-.458L11.912 4h.048ZM9.75 8.48v6.54l5.75-3.27-5.75-3.27Z"
      ></path>
    </svg>
  );
};

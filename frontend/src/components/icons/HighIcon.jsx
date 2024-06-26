import React from "react";

const HighIcon = ({ stroke, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9382 12.253H18.2407C18.9901 12.253 19.2251 11.8153 18.7635 11.2785L12.8405 4.40168C12.3789 3.8661 11.6226 3.8661 11.1608 4.40168L5.2365 11.2785C4.77494 11.8152 5.00986 12.253 5.7593 12.253H8.06245V18.7628C8.06245 19.4423 8.67564 20 9.42505 20H14.5749C15.3244 20 15.9375 19.4424 15.9375 18.7628L15.9373 12.253H15.9382Z"
        stroke={stroke}
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default HighIcon;

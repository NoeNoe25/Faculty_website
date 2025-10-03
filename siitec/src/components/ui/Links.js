import React from 'react';

const Line = ({ 
  width = "100%", 
  height = "1px", 
  backgroundColor = "#444444", 
  className = "",
  ...props 
}) => {
  return (
    <div 
      className={`bg-[${backgroundColor}] ${className}`}
      style={{ 
        width: width?.includes('px') ? width : `${width}px`,
        height: height?.includes('px') ? height : `${height}px`
      }}
      {...props}
    />
  );
};

export default Line;
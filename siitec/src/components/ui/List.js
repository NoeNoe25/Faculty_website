import React from 'react';

const List = ({ children, className = "", ...props }) => {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
};

export default List;
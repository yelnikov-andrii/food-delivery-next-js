import React from 'react';

export const TypeList: React.FC <any> = ({ setFilterType, filterType, types, setPage }) => {
  return (
    <div 
      className='typeList'
    >
      {types.map((type: any) => (
        <div
          key={type}
          onClick={() => {
            setFilterType(type);
            setPage(1);
          }}
          // active={filterType === type ? true : false}
        >
          {type}
        </div>
      ))}
    </div>
  );
};

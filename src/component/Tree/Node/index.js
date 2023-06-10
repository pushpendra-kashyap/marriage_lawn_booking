import React from 'react';
import { SiAcclaim } from 'react-icons/si';

function Node({ item, selected, hasChildren, level, onToggle }) {
  return (
    <div
      style={{ paddingLeft: `${level * 16}px` }}
      className="mt-2 flex justify-center text-center"
    >
      <div className="  border-2  border-black w-py rounded-lg font-serif font-bold">
        {item.name}
      </div>
      {hasChildren && (
        <button
          onClick={onToggle}
          className={`${
            selected
              ? ' text-black px-14 py-1.5 rotate-180'
              : ' text-black px-14 py-1.5 '
          }`}
        >
          <SiAcclaim />
        </button>
      )}
    </div>
  );
}

export default Node;

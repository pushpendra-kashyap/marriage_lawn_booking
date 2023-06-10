import React, { useContext } from 'react';
import { SiAcclaim } from 'react-icons/si';
import { Context } from '../../Booking';

function Node({ item, selected, hasChildren, level, onToggle }) {
  const { items, setItems } = useContext(Context);
  return (
    <div
      style={{ paddingLeft: `${level * 16}px` }}
      className="mt-2 flex justify-center text-center"
    >
      <input
        type="checkbox"
        name="parent"
        onChange={() => {
          if (item.aid) {
            console.log(item.aid);
            setItems((prevSt) => [...prevSt, { id: item.aid, quantity: 1 }]);
          }
        }}
      />
      <label for="parent">{item.name}</label>
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

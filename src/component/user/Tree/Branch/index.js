import React, { useState } from 'react';
import Node from '../Node/index';

function Branch({ item, level }) {
  const [selected, setSelected] = useState(item.selected ?? false);
  const hasChildren = item.children && item.children.length !== 0;

  const renderBranches = () => {
    if (hasChildren) {
      const newLevel = level + 1;
      console.log(item.children);
      return item.children.map((child, index) => {
        return <Branch key={index} item={child} level={newLevel} />;
      });
    }
    return null;
  };
  const toggleSelected = () => {
    setSelected((pre) => !pre);
  };

  return (
    <>
      <Node
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleSelected}
      />
      {selected && renderBranches()}
    </>
  );
}

export default Branch;

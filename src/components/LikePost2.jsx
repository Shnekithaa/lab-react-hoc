import React from 'react';

const LikePost2 = (props) => {
    const {count, handleCount} = props
  return (
    <div>
      <button onClick={handleCount}>Like Post {count}</button>
    </div>
  );
}

export default LikePost2;

import React from 'react';

const LikeImage2 = (props) => {
 const {count, handleCount} = props
  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  );
}

export default LikeImage2;


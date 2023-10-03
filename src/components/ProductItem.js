import React, { useState } from 'react';
import '../components/Prod.css'

const ProductItem = ({ product, handleDelete }) => {
  const [count, setCount] = useState(product.count);

  const handleIncrement = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleDoubleClick = () => {
    if (count === 0) {
      handleDelete(product.id);
    }
  };

  return (
    <div className='FItem'>
      <div className='Item'>
        <div onDoubleClick={handleDoubleClick}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
         <button onClick={handleIncrement}>+</button>
       </div>
      </div>
    </div>
  );
};

export default ProductItem;
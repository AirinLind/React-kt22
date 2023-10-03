import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const handleDelete = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  const handleAddProduct = () => {
    const name = prompt('Введите название товара:');
    const price = parseInt(prompt('Введите цену товара:'));
    const count = 1;
    const id = Date.now();

    if (name && price) {
      setData([...data, { id, name, price, count }]);
    }
  };

  return (
    <div>
      
      <button className='Add' onClick={handleAddProduct}>Добавить товар</button>
      <div className='Block'>
        {data.map((product) => (
          <ProductItem  key={product.id} product={product} handleDelete={handleDelete} />
       ))}
      </div>
    </div>
  );
};

export default App;

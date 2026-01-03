import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
     <Link to='Men'>Men</Link>
     <Link to='Women'>Women</Link>
    </div>
  );
};

export default Product;
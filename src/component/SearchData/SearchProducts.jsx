import React from 'react';
import "./style.css";
import { useStateValue } from '../ContextApi/ContextApi';
import SearchShow from './SearchShow';

function SearchProducts() {
  const [{searchData}, dispatch] = useStateValue();
  
  return (
    <>
    <div className="mainBox">
    {searchData?(<>
      
      {
        searchData.map((items)=>{
          return <>
          <SearchShow className="search"
      id={items.id}
      title={items.title}
      price={items.price}
      image={items.image}
      rating={parseInt(items.rating.rate)}

      />
          </>
        })
      }
      
    </>):(<><h1>Product not found</h1></>)}
      </div>
    </>
  ) 
}

export default SearchProducts

import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';


export const Navbar = () => {
   const { books}  = useContext(BookContext);
   return (
      <div className='navbar'>
         <h1>Hello readers!</h1>
         <p>You have { books.length } left to get through...</p>
      </div>
   );
}


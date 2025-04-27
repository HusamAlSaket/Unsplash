import React from 'react'
import { useGlobalContext } from './Context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if(!searchValue) return;
    setSearchTerm(searchValue);
    console.log(searchTerm)
  }
  return (
    <>
    
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" className='form-input search-input'
         name='search'  placeholder='cat'/>
        <button type='submit' className='submit-btn'>Search</button>
      </form>
    </section>
    </>
  )
}

export default SearchForm
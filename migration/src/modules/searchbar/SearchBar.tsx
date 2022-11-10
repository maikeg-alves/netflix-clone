import React from 'react';
import { Search } from './styles';

type SearchBarProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    props.onChange(event);
  };

  return (
    <Search>
      <input type="text" placeholder="Search" onChange={handleChange} />
    </Search>
  );
};

export default SearchBar;

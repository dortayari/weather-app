import React from 'react'
import { Input, Wrapper } from './styles';

type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({setSearch}: Props) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }


  return (
    <Wrapper>
        <Input type='text' onChange={(e) => handleChange(e)} placeholder='Tel Aviv' />
    </Wrapper>
  )
}

export default SearchBar
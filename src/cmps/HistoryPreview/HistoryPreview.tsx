import React from 'react'
import { Line, Wrapper } from './styles';
import { capitalizeFirstLetter } from '../../utils/capitalizeLetter';

type Props = {
    city: string;
    handleHistoryClick: (city: string) => void;
}

const HistoryPreview = ({city, handleHistoryClick}: Props) => {

  return (
   <Wrapper onClick={() => handleHistoryClick(city)}>
    {capitalizeFirstLetter(city)}
    <Line className='line'/>
   </Wrapper>
  )
}

export default HistoryPreview
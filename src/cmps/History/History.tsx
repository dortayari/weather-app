import React, { useEffect, useState } from 'react'
import { localStorageService } from '../../services/storageService'
import { Button, ModalWrapper, Wrapper } from './styles'
import HistoryPreview from '../HistoryPreview/HistoryPreview'

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const History = ({setSearch}: Props) => {

    const [history, setHistory] = useState<[string]>([''])

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleHistoryClick = (city:string) => {
      setSearch(city)
    }

    useEffect(() => {
      const history = localStorageService.get('history')
      setHistory(history)
    }, [])
    
  return (
    <Wrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>History</Button>
      <ModalWrapper className={!isOpen ? 'hide' : ''}>
        {
          history.map((city:string) => (
            <HistoryPreview city={city} key={city} handleHistoryClick={handleHistoryClick}/>
          ))
        }
      </ModalWrapper>
    </Wrapper>
  )
}

export default History
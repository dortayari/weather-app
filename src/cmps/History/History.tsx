import React, { useEffect, useState } from 'react'
import { localStorageService } from '../../services/storageService'

type Props = {}

const History = (props: Props) => {

    const [history, setHistory] = useState([])

    useEffect(() => {
      const history = localStorageService.get('history')
      setHistory(history)
    }, [])
    
  return (
    <div>{history.map((history: string)=> history)}</div>
  )
}

export default History
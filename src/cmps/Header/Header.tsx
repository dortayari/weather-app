import React from 'react'
import { Title, Wrapper } from './styles'
import CurrentLocation from '../CurrentLocation/CurrentLocation'

type Props = {}

const Header = (props: Props) => {
  return (
    <Wrapper>
        <Title>
            Weather Everywhere
        </Title>
        <CurrentLocation />
    </Wrapper>
  )
}

export default Header
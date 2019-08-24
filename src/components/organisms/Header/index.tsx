import * as React from 'react'
import styled from 'styled-components'
import Hamburger from '../../atoms/Hamburger'
import Overlay from '../../atoms/Overlay'

interface IHeader {
  height: number
}

const Wrapper = styled.header`
  align-items: center;
  background-color: #eee;
  display: flex;
  height: ${ ({ height }: IHeader) => height }px;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
`

const Logo = styled.div`
  color: #aaa;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
`

const Header: React.FC<IHeader> = ({ height }) => {
  const [isOpen, setOpen] = React.useState(false)
  const onClick = () => {
    setOpen(!isOpen)
  }

  return (
    <Wrapper height={ height }>
      <Overlay isShow={ isOpen } />
      <Logo>Logo</Logo>
      <Hamburger open={ isOpen } onClick={ onClick } />
    </Wrapper>
  )
}

export default Header

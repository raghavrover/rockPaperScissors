import styled from 'styled-components'

export const ChoiceListItem = styled.li`
  list-style-type: none;

  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
  }
`

export const ChoiceItemBtn = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const ChoiceItemImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 390px) and (max-width: 570px) {
    width: 140px;
    height: 140px;
  }

  @media screen and (max-width: 390px) {
    width: 100px;
    height: 100px;
  }
`

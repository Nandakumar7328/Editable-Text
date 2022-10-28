import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f5d0fe;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
`
export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
`
export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const InputText = styled.input`
  width: 300px;
  height: 30px;
  border: solid #cbd2d9 1px;
  border-radius: 4px;
  color: #323f4b;
  font-family: 'Roboto';
  outline: none;
  padding-left: 10px;
`
export const ParaText = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
`
export const ButtonToSave = styled.button`
  background-color: #d946ef;
  width: 60px;
  height: 30px;
  outline: none;
  border-width: 0px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 700;
`

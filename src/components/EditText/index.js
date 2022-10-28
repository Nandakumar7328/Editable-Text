import {Component} from 'react'
import {
  BackgroundContainer,
  CardContainer,
  Heading,
  InputText,
  InputTextContainer,
  ParaText,
  ButtonToSave,
} from './styledComponents'

class EditText extends Component {
  state = {isInput: true, inputText: ''}

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isInput: !prevState.isInput}))
  }

  render() {
    const {isInput, inputText} = this.state
    const buttonText = isInput ? 'Save' : 'Edit'
    return (
      <BackgroundContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputTextContainer>
            {isInput ? (
              <InputText
                type="text"
                value={inputText}
                onChange={this.onChangeText}
              />
            ) : (
              <ParaText>{inputText}</ParaText>
            )}
            <ButtonToSave type="button" onClick={this.onClickButton}>
              {buttonText}
            </ButtonToSave>
          </InputTextContainer>
        </CardContainer>
      </BackgroundContainer>
    )
  }
}

export default EditText

import React from 'react'

const Button = (props) => (
  <button style={{background: props.color}}>
    {props.children}
  </button>
)

const Message = (props) => (
  <div>
    {props.text} <Button color={props.color}>Delete</Button>
  </div>
)

class MessageList extends React.Component {
  render() {
    const color = "PapayaWhip"
    return (
      <div>
        {React.Children.toArray(
          this.props.messages.map((message) =>
            <Message text={message.text} color={color} />
          )
        )}
      </div>
    )
  }
}

const messages = [
  { text: 'React' },
  { text: 'Redux' },
  { text: 'Typescript' },
]

const App = () => (
  <MessageList messages={messages} />
)

export default App

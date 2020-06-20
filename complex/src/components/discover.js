import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'


const sportbtn = {
    border: '2px solid #d1e3ff',
    backgroundColor: '#d1e3ff',
    color: 'purple',
    fontWeight: 'strongr',
    borderRadius: '19px',
    padding: '30px',
    fontSize: '20px',

    ":hover": {
        backgroundColor: "#ff0000",
        color: "#ffffff"
      }
}

class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
        
      <Modal 
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
            <button class="ui button">Multiple Modals</button>
        }
        t
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const ModalExampleMultiple = () => (
  <Modal trigger={<Button style={sportbtn}>Sports</Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
      </div>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default ModalExampleMultiple

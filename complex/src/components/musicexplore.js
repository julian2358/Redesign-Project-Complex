import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Embed } from 'semantic-ui-react'
import { Comment, Form, Header } from 'semantic-ui-react';
import Comments from './comments.js'
import { Segment } from 'semantic-ui-react'
const sportbtn = {
    border: '2px solid #d1e3ff',
    backgroundColor: '#ffd12b',
    color: 'black',
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
            <button class="ui button">Proceed<Icon name='right chevron' /></button>
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
    <Modal.Header>Sports </Modal.Header>
    <Segment style={{overflow: 'auto', maxHeight: 500 }}>
    <Modal.Content>
      <div className='image'>
      <Embed
    id='pEtDAzfWtIE'
    placeholder={process.env.PUBLIC_URL + '/imgs/nbaa.jpg'}
    source='youtube'
  />
      </div>
      <Modal.Description>
     
    <Comments />
  
      </Modal.Description>
    </Modal.Content>
    </Segment>
    <Modal.Actions>
    <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default ModalExampleMultiple

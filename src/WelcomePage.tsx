import React from 'react';
import { Navbar, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './WelcomePage.css'
import Login from './LoginComponent';

export default class WelcomePage extends React.Component<{}, { modalState: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { modalState: false };
  }

  componentDidMount() {
    this.setState(prevState => ({
      modalState: !prevState.modalState,
    }));

  }

  render() {
    return (
      <>

        <Navbar variant="dark" bg='dark' expand="lg">
          <Navbar.Brand id='NavBrand'>Quick Finance</Navbar.Brand>
        </Navbar>

        <Modal
          show={this.state.modalState}
          onHide={() => this.setState(prevState => ({
            modalState: !prevState.modalState,
          }))}
          id='WelcomeModal'
          bg='dark'
          text='light'
          size='lg'
          centered={true}
        >
          <Modal.Body>
            <Modal.Title >Welcome to Quick Finance</Modal.Title>
            <Login/>
          </Modal.Body>
          <Modal.Body>

          </Modal.Body>
        </Modal>
      </>
    )
  }


}
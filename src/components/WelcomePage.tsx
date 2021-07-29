import React from 'react';
import { Navbar, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/WelcomePage.css'
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
          backdrop={false}
          show={this.state.modalState}
          onHide={() => this.setState(prevState => ({
            modalState: !prevState.modalState,
          }))}
          text='light'
          centered={true}
        >
          <Modal.Body id='WelcomeModal'>
            <Modal.Title id='WelcomeModalTitle'>Welcome to Quick Finance</Modal.Title>
            <Login/>
          </Modal.Body>
        </Modal>
      </>
    )
  }


}
import React from 'react';
import { Navbar, Modal, Offcanvas, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/WelcomePage.css'
import Login from './LoginComponent';

export default class WelcomePage extends React.Component<{}, { modalState: boolean, offCanvasState: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { modalState: false, offCanvasState: false };
  }

  

  componentDidMount() {
    this.setState(prevState => ({
      modalState: !prevState.modalState,
    }));

    this.setState(prevState => ({
      offCanvasState: !prevState.offCanvasState,
    }));
  }

  render() {
    return (
      <div className='Webpage'>

        <Navbar variant="dark" bg='dark' expand="lg">
          <Navbar.Brand id='NavBrand'>Quick Finance</Navbar.Brand>
        </Navbar>

        {/* <Offcanvas 
          backdrop={false}
          show={this.state.offCanvasState} 
          onHide={() => this.setState(prevState => ({
              offCanvasState: !prevState.modalState,
            }))} 
        >
          <Offcanvas.Header closeButton={false} >
            <Offcanvas.Title className='OffCanvasTitle'>Quick Finance</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas> */}

        {/* <div className='Welcome'>
          
        </div> */}

        <div className='Welcome' >
        <h1 className='Title'>Welcome to Quick Finance</h1>
          <p className='Description'>
            Thank you for choosing Quick Finance. 
            Sign up for the best tool today!
          </p>
          <Login/>
        </div>
      </div>
    )
  }


}
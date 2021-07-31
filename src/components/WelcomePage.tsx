import React from 'react';
import { Navbar } from 'react-bootstrap'
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

        <Navbar className='NavBar' expand="lg">
          <Navbar.Brand id='NavBrand'>Quick Finance</Navbar.Brand>
        </Navbar>

        {/* <Offcanvas 
          backdrop={false}
          show={this.state.offCanvasState} 
          onHide={() => this.setState(prevState => ({
              offCanvasState: !prevState.modalState,
            }))} 
        >
          <Offcanvas.Header className='OffCanvasHeader' closeButton={false} >
            <Offcanvas.Title className='OffCanvasTitle'>Quick Finance</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas> */}

        <div className='OffCanvas'>
          <img className='iPhoneImage' src={`https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000`} alt='iPhone' />
            <div className='Message'>
              Welcome
              <br/>
              To Quick Finance
            </div>
        </div>

        <div className='WelcomePageContainer'></div>

        <div className='Welcome' >
          <h1 className='Title'>Welcome to Quick Finance</h1>
          <p className='Description'>
            Thank you for choosing Quick Finance.
            <br/>
            Sign up today!
          </p>
          <Login />
        </div>
      </div>
    )
  }


}
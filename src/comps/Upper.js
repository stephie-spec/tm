import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import '../css/Upper.css'


export default function Upper() {
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div>  
      <MDBContainer className='p-4'>
        <section className='front'>
        <div className='container text-centre text-md-start mt-5'>
          <div className='row mt-3'>   
            <div className='col-md-4 col-lg-3 col-xl-3 ml-3 mb-md-0 mb-4 textbg'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> NAIROBI, KENYA 00100
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                 tubongemental@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> PHONE NUMBER: 12345678
              </p>
            </div>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 textbg'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Tubonge Mental
              </h6>
              <p>
                Hi. We are tubonge mental. We are not a company nor an organization but we are looking
              for partners and people who can help us move forward.If you would like
              to be a partner or contribute in another way, please call this number:
              </p>
            </div>
          </div>
        </div>
      </section>
        </MDBContainer>
     
      </div>
      </header>
  );
}
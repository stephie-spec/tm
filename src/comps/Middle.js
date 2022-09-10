import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Middle = () => {
    return ( 

        <>        
        <MDBFooter className='text-center text-white bg-dark' style={{ backgroundColor: '#caced1' }}>
      </MDBFooter>
      <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <a className='btn btn-outline-light btn-floating m-1' href='tubongemental@gmail.com' role='button'>
            <SiGmail />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/tubongemetal/' role='button'>
            <FaInstagramSquare />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://tubongemental.com/'>
          TUBONGE MENTAL
        </a>
      </div>
    </MDBFooter>
      </>
    

     );
}
 
export default Middle;

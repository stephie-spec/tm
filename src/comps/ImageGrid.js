import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function ImageGrid() {
  const { docs } = useFirestore('images');
  return (
    <MDBContainer>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {docs && docs.map(doc => (
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={doc.url}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      ))}
    </MDBRow>
    </MDBContainer>
  );
}

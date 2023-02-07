
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div>


<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        
        
        <div className='me-5 d-none d-lg-block'>
          <span>Contact</span>
        </div>

        <div>
        
          
          <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google text-danger" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin text-primary" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github text-warning" />
          </a>
        </div>
      </section>

      
    </MDBFooter>



        </div>
    )
}


export default Footer;
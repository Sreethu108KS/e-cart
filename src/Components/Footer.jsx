import React from 'react'
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
 <MDBFooter className='text-center text-lg-start text-muted bg-primary'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      
        
      </section>

      <section className='' >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3' >
            <MDBCol md="3" lg="4" xl="3" className='text-info mx-auto mb-4'>
              <h6 className='text-white text-uppercase fw-bold mb-4'>
                <MDBIcon icon="play" className="me-3" style={{color:'white'}}  /><i class="fa-solid fa-truck-fast"></i>E-Cart</h6>
              <p style={{color:'white'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro tempora asperiores molestiae soluta cumque officia veritatis laudantium, quas, laborum distinctio corporis placeat ea quae quisquam animi qui, natus amet?
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='  mx-auto mb-4'>
              <h6 className=' text-white text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
              </p>
              <p>
               
                <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
              </p>
              <p>
                {/* <a style={{textDecoration:'none'}}  href='#!' className='text-reset'>
                  
                </a> */}

                <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-white  text-uppercase fw-bold mb-4' >Guides</h6>
              <p>
                <Link to={'http://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>React</Link>
              </p>
              <p>
              <Link to={'http://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
              </p>
              <p>
              <Link to={'http://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Contact us</h6>
              <div>
                <label htmlFor="inp"></label>
<input type="email" id='inp' style={{backgroundColor:'transparent',color:'white'}} className='p-2' placeholder='Enter your email Id' /> <button className='btn btn-warning btn-sm m-3'> Subscribe</button>
<br />
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a style={{textDecoration:'none'}}  className='text-reset  fw-bold' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer
import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
        <MDBFooter className='bg-info text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='my-2'>
                <MDBBtn
                    
                    className='m-1'
                    style={{ backgroundColor: '#3b5998' }}
                    role='button'
                >
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn
                    
                    className='m-1'
                    style={{ backgroundColor: '#55acee' }}
                    role='button'
                >
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn
                    
                    className='m-1'
                    style={{ backgroundColor: '#dd4b39' }}
                    role='button'
                >
                    <MDBIcon fab icon='google' />
                </MDBBtn>
                <MDBBtn
                    
                    className='m-1'
                    style={{ backgroundColor: '#ac2bac' }}
                    role='button'
                >
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn
                    
                    className='m-1'
                    style={{ backgroundColor: '#0082ca' }}
                    role='button'
                >
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn
                    
                    className='m-1'
                    style={{ backgroundColor: '#333333' }}
                    role='button'
                >
                    <MDBIcon fab icon='github' />
                </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright : &nbsp;
                <a className='text-dark'>
                MyContacts.com
                </a>
            </div>
            </MDBFooter>
    </>
  )
}

export default Footer
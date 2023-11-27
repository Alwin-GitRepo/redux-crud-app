import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <Link to={'/'}>
              <MDBNavbarBrand href='#' className='fs-3'>
                <i class="fa-solid fa-address-book fa-shake me-3" style={{color: "#ec3e13"}}></i>
                My Contacts
              </MDBNavbarBrand>
          </Link>
        </MDBContainer>
      </MDBNavbar>
  );
};

export default Navbar;

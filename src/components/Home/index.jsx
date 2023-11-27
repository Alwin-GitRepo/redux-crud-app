import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container my-5">
      <div className="row d-flex flex-column">
        <div className="text-end">
          <Link to="/add" className="btn btn-success btn-outline-dark my-5 ml-auto">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white text-center">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <div className='d-flex justify-content-evenly'>
                        <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        <i class="fa-solid fa-pen-to-square text-light" style={{color: "#1064f4"}}></i>
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        
                        className="btn btn-sm btn-danger"
                      >
                        <i class="fa-solid fa-user-minus text-light" style={{color: "#ec3e13"}}></i>
                      </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { toast } from "react-toastify";

const initialState = [
  { id: 1, name: "Ajay Gupta", email: "ajaygupta@gmail.com", phone: 9821991836 },
  { id: 2, name: "Alok kumar", email: "alokkumar@gmail.com", phone: 9716682075 },
  { id: 3, name: "Ankur ghar", email: "ankurghar@gmail.com", phone: 9044652640 },
  { id: 4, name: "Anoop Singh", email: "anoopsingh@gmail.com", phone: 9795852199 },
  { id: 5, name: "TAvanish yadav", email: "avanishyadav@gmail.com", phone: 9506996026 },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      toast.error("Contact Deleted!!", {
      position: toast.POSITION.TOP_CENTER,
    });
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};

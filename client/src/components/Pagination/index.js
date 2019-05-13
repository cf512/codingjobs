import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import "./style.css"

function Pagination(props) {
  return (
    <div className="container paginationBtns">
      <MDBBtn color="primary" disabled={props.prevDisabled} onClick={props.prevOnClick}>
        <MDBIcon icon="angle-left" /> Previous
      </MDBBtn>
      <MDBBtn color="primary" disabled={props.nextDisabled} onClick={props.nextOnClick}>
        Next <MDBIcon icon="angle-right" />
      </MDBBtn>
    </div>
  );
}

export default Pagination;
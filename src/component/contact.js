import React from "react";

function Contact(props) {
  return (
    <div>
      {" "}
      <div className=" container">
        <h5 className="text-center fs-2 mt-3 ">Contact Us </h5>
        <div className="row ">
          <div className="col-md-6">
            <div className="d-flex">
              <i class="fa-regular fa-envelope "></i>
              <p className="m-2">Travelogo@mail.com</p>
            </div>

            <div className="d-flex mt-2">
              <i class="fa-solid fa-phone"></i>
              <p className="m-2"> + 202 7777 555</p>
            </div>
            <div className="d-flex mt-2">
              <i class="fa-brands fa-whatsapp"></i>
              <p className="m-2"> Whatsapp</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mt-3">
              <div>
                <h4 className="ms-4">Follow us </h4>
                <i class="fa-brands fa-facebook m-1"></i>
                <i class="fa-brands fa-instagram m-1"></i>
                <i class="fa-brands fa-twitter m-1"></i>
                <i class="fa-brands fa-youtube m-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

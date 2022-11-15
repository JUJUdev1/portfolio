import React from "react";
import useModal from "./useModal/index";
import Modal from "./ParamModal/index";

export default function Modals(props) {
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm,
  } = useModal();

  return (
    <>
      <div className="modalContainer">
        <button
          className="btn"
          onClick={() => {
            window.open(props.code, "_blank");
          }}
        >
          CODE
        </button>
        <button className="btn" onClick={toggleRegistrationForm}>
          DEMO
        </button>
        {props.demo && (
          <Modal
            isShowing={isRegistrationFormShowed}
            hide={toggleRegistrationForm}
            title="Demo"
          >
            <iframe
              src={props.demo}
              width="100%"
              height="100%"
              title="demo"
            ></iframe>
          </Modal>
        )}
        {!props.demo && (
          <Modal
            isShowing={isRegistrationFormShowed}
            hide={toggleRegistrationForm}
            title="Demo"
          >
            <h3
              style={{
                border: "1px solid black",
                padding: "10px",
                textAlign: "center",
              }}
            >
              DESCRIPTION
            </h3>
            <p
              style={{
                lineHeight: "2",
                fontSize: "1.5rem",
                color: "black",
              }}
            >
              {props.descriptif}
            </p>
            <h3
              style={{
                border: "1px solid black",
                padding: "10px",
                textAlign: "center",
              }}
            >
              IMAGES
            </h3>
            {props.imagesList && (
              <div>
                {Object.values(props.imagesList).map((m, idx) => {
                  return <img key={idx} src={m} alt="i am img"/>;
                })}
              </div>
            )}
          </Modal>
        )}
      </div>
    </>
  );
}

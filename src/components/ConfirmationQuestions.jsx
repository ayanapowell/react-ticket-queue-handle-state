import React from "react";

function ConfirmationQuestions(props) {
  return (
    <div>
      <p>
        Have you gone through all the steps on the Learn How to Program
        debugging lesson?
      </p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

export default ConfirmationQuestions;

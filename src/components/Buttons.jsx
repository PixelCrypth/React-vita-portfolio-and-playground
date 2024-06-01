import React from 'react';

function Buttons() {
  return (
    <div>

      <div className="Alert-button-div">
        <h2>Standard Alert Button</h2>
        <p>This button gives you an alert.</p>
        <button
          onClick={() => {
            alert("This is an alert!");
          }}
        >
          Click me
        </button>
      </div>

      <div className="Choice-button-div">
        <h2>Confirm Button</h2>
        <p>Click the button below to see an alert:</p>
        <button
          onClick={() => {
            const answer = window.confirm("Do you like this button?");
            if (answer) {
              alert("Nice!");
            } else {
              alert("Well, that's too bad.");
            }
          }}
        >
          Click me
        </button>
      </div>

    </div>
  );
}

export default Buttons;

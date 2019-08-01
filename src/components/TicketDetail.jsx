import React from "react";

function TicketDetail(props) {
  return (
    <div>
      <hr />
      <h1>
        {props.selectedTicket.names} - {props.selectedTicket.location}
      </h1>
      <h2>Submitted {props.selectedTicket.formattedWaitTime} ago</h2>
      <h4>
        <em>{props.selectedTicket.issue}</em>
      </h4>
      <hr />
    </div>
  );
}

export default TicketDetail;

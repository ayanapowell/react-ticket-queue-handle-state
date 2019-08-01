import React from "react";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";

function Admin(props) {
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket != null) {
    optionalSelectedTicketContent = (
      <TicketDetail selectedTicket={props.selectedTicket} />
    );
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection}
      />
    </div>
  );
}
export default Admin;

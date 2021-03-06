import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Error404 from "./Error404";
import { Switch, Route } from "react-router-dom";
import Moment from "moment";
import Admin from "./Admin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(
      this
    );
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(
      this
    );
  }
  componentDidMount() {
    this.waitTimeUpdateTime = setInterval(
      () => this.updateTicketElapsedWaitTime(),
      60000
    );
  }
  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }
  updateTicketElapsedWaitTime() {
    let newMoment = Moment;
    console.log(newMoment);
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach(
      ticket => (ticket.formattedWaitTime = ticket.timeOpen.fromNow(true))
    );
    this.setState({ masterTicketList: newMasterTicketList });
  }
  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = newTicket.timeOpen.fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({ masterTicketList: newMasterTicketList });
  }
  handleChangingSelectedTicket(ticket) {
    console.log(ticket);
    this.setState({ selectedTicket: ticket });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TicketList ticketList={this.state.masterTicketList} />
            )}
          />
          <Route
            path="/newticket"
            render={() => (
              <NewTicketControl
                onNewTicketCreation={this.handleAddingNewTicketToList}
              />
            )}
          />
          <Route
            path="/admin"
            render={props => (
              <Admin
                ticketList={this.state.masterTicketList}
                currentRouterPath={props.location.pathname}
                onTicketSelection={this.handleChangingSelectedTicket}
                selectedTicket={this.state.selectedTicket}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

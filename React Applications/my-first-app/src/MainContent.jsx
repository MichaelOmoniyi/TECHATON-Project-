import { Component } from "react";
import React from "react";
import "./MainContent.css";
import { data } from "jquery";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "./Cooper.png",
      },
      {
        id: 2,
        name: "Michael",
        phone: "789-012",
        address: { city: "Lagos" },
        photo: "./Marcus.png",
      },
      {
        id: 3,
        name: "Allen",
        phone: "",
        address: { city: "New York" },
        photo: "./Corey.png",
      },
      {
        id: 4,
        name: "James",
        phone: "901-234",
        address: { city: "Berlin" },
        photo: "./Philip.png",
      },
      {
        id: 5,
        name: "John",
        phone: null,
        address: { city: "London" },
        photo: "./Jaydon.png",
      },
    ],
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("S")) return { backgroundColor: "green" };
    else if (custName.startsWith("J")) return { backgroundColor: "red" };
    else return {};
  };

  render() {
    return (
      <div>
        {/* <h2>Hello from Main Component</h2> */}
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge-secondary m-2 count-bg">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRaw()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No Phone</div>
    );
  };

  getCustomerRaw = () => {
    {
      return this.state.customers.map((cust) => {
        return (
          <tr key={cust.id}>
            <td>{cust.id}</td>
            <td>
              <img src="{cust.photo}" alt="Customer"></img>
            </td>
            <td
              style={this.customerNameStyle(cust.name)}
            >
              {cust.name}
            </td>
            <td>{this.getPhoneToRender(cust.phone)}</td>
            <td>{cust.address.city}</td>
          </tr>
        );
      });
    }
  };
}

// App.js
import React from "react";
import Header from "./Header";
import TeamMember from "./TeamMember";
import "./App.css";

const leadership_Management_Team1 = {
  name: "Karan Johar",
  role: "Founder / CEO",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const leadership_Management_Team2 = {
  name: "Rakesh Roshan",
  role: "Founder / CEO",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const leadership_Management_Team3 = {
  name: "Rakhi Mehta",
  role: "VP ,Development and Growth",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const leadership_Management_Team4 = {
  name: "Raja Reddy ",
  role: "VP,Sales and Marketing",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const leadership_Management_Team5 = {
  name: "Mahima Rana",
  role: "TeamLead , SE",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Development_Team1 = {
  name: "Mayuri Chaudhari",
  role: "TeamLead , SE",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Development_Team2 = {
  name: "Rutvik Pranami",
  role: "Software Engineer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Development_Team3 = {
  name: "Leela Chigulla",
  role: "Software Engineer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Development_Team4 = {
  name: "Divyanshi Rathod",
  role: "Software Engineer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Development_Team5 = {
  name: "Salaman Khan",
  role: "Software Engineer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Development_Team6 = {
  name: "Javade Ali",
  role: "Software Engineer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Development_Team7 = {
  name: "Barac Obama",
  role: "Software Engineer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Sales_Marketing_Team1 = {
  name: "Chaitali Beleker",
  role: "TeamLead",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Sales_Marketing_Team2 = {
  name: "Akansha Ghodke",
  role: "Sales Officer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Sales_Marketing_Team3 = {
  name: "Shefali makwana",
  role: "Sales Officer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Sales_Marketing_Team4 = {
  name: "Akshay Prajapati",
  role: "Sales Officer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Sales_Marketing_Team5 = {
  name: "sahil Makwana",
  role: "Marketing Officer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Sales_Marketing_Team6 = {
  name: "Ronak Chauhan",
  role: "Marketing Officer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};
const Sales_Marketing_Team7 = {
  name: "Janki Mewada",
  role: "Marketing Officer",
  image:
    "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
};



const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="team-members">
        <TeamMember {...leadership_Management_Team1} />
        <TeamMember {...leadership_Management_Team2} />
      </div>
      <div className="team-members">
        <TeamMember {...leadership_Management_Team3} />
        <TeamMember {...leadership_Management_Team4} />
        <TeamMember {...leadership_Management_Team5} />
      </div>
      <p className="development_team">Development Team</p>
      <div className="team-members">
        <TeamMember {...Development_Team1} />
        <TeamMember {...Development_Team2} />
        <TeamMember {...Development_Team3} />
        <TeamMember {...Development_Team4} />
      </div>
      <div className="team-members">
        <TeamMember {...Development_Team5} />
        <TeamMember {...Development_Team6} />
        <TeamMember {...Development_Team7} />
      </div>
      <p className="development_team">Sales and Marketing Team</p>
      <div className="team-members">
        <TeamMember {...Sales_Marketing_Team1} />
        <TeamMember {...Sales_Marketing_Team2} />
        <TeamMember {...Sales_Marketing_Team3} />
        <TeamMember {...Sales_Marketing_Team4} />
      </div>
      <div className="team-members">
        <TeamMember {...Sales_Marketing_Team5} />
        <TeamMember {...Sales_Marketing_Team6} />
        <TeamMember {...Sales_Marketing_Team7} />
        
      </div>
    </div>
  );
};

export default App;

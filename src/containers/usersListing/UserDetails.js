import React from "react";
import Users from "./Users";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
function UserDetails() {
  const location = useLocation();
  const item = location.state.item;
  return (
    <Users>
      <div>
        <Header title="User Details">
          <Button
            to={".."}
            component={Link}
            className="primary-btn"
            variant="outlined"
          >
            Go Back
          </Button>
        </Header>
      </div>
      <div>
        <div className="flex items-center">
            <div>
                <img
                    src={item.avatar}
                    alt="avatar"
                    className="rounded-full w-16 mr-5"
                />
            </div>
            <div>
                <h5>
                <b>{item.first_name + " " + item.last_name}</b>
                </h5>
                <h6>{item.email}</h6>
            </div>
        </div>
        <div>
            <h5 className="mt-8"><b>Details:</b></h5>
            <p className="w-100">{item.details}</p>
        </div>
        
      </div>
    </Users>
  );
}
export default UserDetails;

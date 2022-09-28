import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  getUserDetails,
  deleteUser,
  updateUser,
  AddNewUser,
} from "./store/UserDetailsSlice";
import { Button, Typography } from "@mui/material";
import UserPopup from "./UserPopup";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import Users from "./Users";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
function UsersList() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const UserDetails = useSelector((store) => store.userDetails.details);
  const [details, setDetails] = useState([]);
  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    UserDetails && dispatch(getUserDetails());
  }, []);
  useEffect(() => {
    UserDetails && setDetails(UserDetails);
  }, [UserDetails]);

  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost =
    details && details.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentpage(pageNumber);
  };
  const handleClickOpen = (item) => {
    setEditUser(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditUser({});
  };
  const onDataChangeData = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };
  const handleUpdateSaveData = (item) => {
    dispatch(updateUser(item));
    setOpen(false);
    setEditUser({});
  };

  const handleAddSaveData = (item) => {
    dispatch(AddNewUser(item));
    setOpen(false);
    setEditUser({});
  };

  const handleNavigation = (item) => {
    history(`/user/${item.id}`, {
      state: {
        item,
      },
    });
  };
  return (
    <div>
      <div>
        <Header title="User Listing">
          <Button
            className="primary-btn"
            variant="outlined"
            onClick={() => handleClickOpen(editUser)}
          >
            Add New
          </Button>
        </Header>
      </div>

      <div>
        {currentPost &&
          currentPost.map((item, index) => (
            <div className="flex mb-5 justify-between" key={index}>
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
                <VisibilityIcon 
                    onClick={() => handleNavigation(item)} 
                    style={{cursor: 'pointer', color: '#1976d2', marginRight: '8px'}}
                />
                <Button
                  style={{marginRight: '8px'}}
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => handleClickOpen(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => dispatch(deleteUser(item.id))}
                >
                  Delete
                </Button>
                
              </div>
            </div>
          ))}
      </div>

      <Pagination
        postPerPage={postPerPage}
        totalPosts={details.length}
        paginate={paginate}
      />

      {open && (
        <UserPopup
          data={editUser}
          open={open}
          handleClose={handleClose}
          onDataChange={onDataChangeData}
          handleAddSave={handleAddSaveData}
          handleUpdateSave={handleUpdateSaveData}
        />
      )}
    </div>
  );
}

export default UsersList;

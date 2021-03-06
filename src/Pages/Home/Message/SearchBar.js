import { useState, useEffect } from "react";
import { getAllUsers } from "../../../api/api-users";
import { NavLink, useParams } from "react-router-dom";
import slackBot from "../../../Assets/Images/slackBot.png";

const SearchBar = ({ className, type }) => {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let { uid, id } = useParams();

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUserList(res["data"]["data"]);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    setSearchInput("");
  }, [id]);

  return (
    <div className={className}>
      <input
        value={searchInput}
        type="text"
        placeholder={type === "messages" ? "Search User" : "Add people"}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      {searchInput && searchInput.length > 0 ? (
        <div className="userList">
          {userList
            .filter((user) => {
              if (searchInput === "") {
                return "";
              } else if (
                user.uid.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => {
              const { id, email } = user;
              return (
                type === "messages" ? (
                  <NavLink to={`/${uid}/new-message/${id}`} key={id}>
                    <div className="filteredUsers">
                      <img className="filteredUsers-img" src={slackBot} />
                      <h3>{email}</h3>
                    </div>
                  </NavLink>
                ) : (
                  <div className="filteredUsers">
                    <img className="filteredUsers-img" src={slackBot} />
                    <h3>{email}</h3>
                  </div>
                )
              );
            })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;

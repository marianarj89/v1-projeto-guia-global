import React, { useEffect, useState } from "react";
import axios from "axios";


const RandomUserGenerator = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setUser(response.data.results[0]);
    });
  }, []);

  return (
    <div>
      {user && (
        <div>
          <img className="imgTeam" src={user.picture.large} alt={user.name.first} />
          <div className="infoTeam">
          <p> Nome:  {user.name.first} {user.name.last}</p>
          <p> E-mail: {user.email}</p>
          <p> Tel.: {user.cell}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomUserGenerator;

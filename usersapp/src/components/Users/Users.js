/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import axios from "../../utilities/axios";

import "./Users.css";
import { useNavigate } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = async () => {
    try {
      const cachedData = JSON.parse(
        sessionStorage.getItem(`page${currentPage}`)
      );
      if (cachedData) {
        setData(cachedData);
      } else {
        const res = await axios.get(`/v2/list?page=${currentPage}&limit=20`);
        sessionStorage.setItem(`page${currentPage}`, JSON.stringify(res.data));
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const images =
    data &&
    data.map(({ id, author, width, height, download_url, url }, index) => (
      <div className="pics" key={id}>
        <img
          src={download_url}
          style={{
            width: "100%",
            height: id === "1009" ? "300px" : "100%",
            display: load ? "none" : "",
          }}
          alt="user"
          onLoad={() => {
            setLoad(false);
          }}
          onClick={() => {
            navigate(`/info/${id}`, { state: { author, img: download_url } });
          }}
        ></img>
      </div>
    ));
  return (
    <div>
      <>
        <h1 className="title">Users</h1>

        <div className="image-list">{images}</div>
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </>
    </div>
  );
}

export default Users;

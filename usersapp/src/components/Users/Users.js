/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import UsersInfo from "../UsersInfo/UsersInfo";
import axios from "../../utilities/axios";

import "./Users.css";

function Users() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState(false);
  const [load, setLoad] = useState(true);

  const [img, setImg] = useState();

  const [auth, setAuth] = useState();
  // const [prevValue, setPrev] = useState();

  const previousInputValue = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
  getData();
  }, [currentPage]);


  let storage;



  useEffect(() => {
    previousInputValue.current = currentPage;
    console.log(previousInputValue.current)
  }, []);
  

  // console.log( JSON.stringify(previousInputValue) === JSON.stringify(data) )

 


  const getData = async () => {
    try {
      const res = await axios.get(`/v2/list?page=${currentPage}&limit=20`);
if (!storage)
      {
        sessionStorage.setItem("str", JSON.stringify(res.data));
      storage = JSON.parse(sessionStorage.getItem("str"));
      console.log('runif',storage,data)
      setData(res.data);
     console.log('runeif',storage,data)
    }else
   { 
  //    sessionStorage.setItem("str", JSON.stringify(data));
  //  storage = JSON.parse(sessionStorage.getItem("str")); 
     setData(res.data)
     console.log('runelse',storage,data)

  }
      // console.log(storage,data);

    } catch (error) {
      console.log(error);
    }
  };
  //   const showInfo =(image,author) =>
  //   {  setInfo(true);
  //     setAuth(author)
  //     setImg(image)
  //     console.log(auth,img)
  // }
  // console.log(currentPage); 

  const images =
    data &&
    data.map(({ id, author, width, height, download_url }, index) => (
      <div className="pics" key={id}>
        <img
          src={download_url}
          style={{
            width: "100%",
            height: id === "1009" ? "300px" : "",
            display: load ? "none" : "",
          }}
          alt="user"
          onLoad={() => {
            setLoad(false);
          }}
          onClick={() => {
            setAuth(author);
            setImg(download_url);
            setInfo(true);
          }}
        ></img>
      </div>
    ));
  return (
    <div>
      {info ? (
        <UsersInfo auth={auth} img={img} />
      ) : (
        <>
          <div className="image-list">{images}</div>
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}

export default Users;

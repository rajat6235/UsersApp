import React, { useEffect, useState } from "react";
// import GetData from "../../utilities/services";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import "./Users.css";

function Users() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    getData()
  }, []);
  const getData =() =>{
      axios.get(`https://picsum.photos/v2/list`)
      .then((response)=>{
        const allData= response.data
        console.log(allData)
        setData(allData)
      })}
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const images =
    data &&
    currentPosts.map(({ id, author, width, height, download_url }, index) => (
      <div className="pics" key ={id}>
        <img src={download_url} style={{ width: "100%" , height: id==='1009' ? '300px':'' }} alt="user"></img>
      </div>
    ));
  return (
    <div>
      <div className="image-list">{images}</div>
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Users;

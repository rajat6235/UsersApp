import React, { useEffect, useRef, useState } from "react";
import GetData from "../../utilities/services";
import Pagination from "../Pagination/Pagination";
import "./Users.css";

function Users() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const imageRef = useRef();

  useEffect(() => {
    GetData().then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    const setSpans = () => {
      console.log(imageRef.current.clientHeight);
    };
    const imgref = imageRef.current;
    imgref
      ? imgref.addEventListener("click", setSpans)
      : console.log("no data");
  });
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const images =
    data &&
    currentPosts.map(({ id, author, width, height, download_url }, index) => (
      <div className="pics">
        <img
          src={download_url}
          style={{ width: "100%" }}
          ref={imageRef}
          alt="user"
        ></img>
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

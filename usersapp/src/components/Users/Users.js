import React, { useEffect, useState } from 'react'
import GetData from '../../utilities/services'
import Pagination from '../Pagination/Pagination';

function Users() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    GetData().then((response) => setData(response.data));
  }, []);

 const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      
      {
         data && currentPosts.map(({id,author,width,height,download_url},index)=>(
     <div>
      {console.log(download_url)}
      <img src={download_url} style={{height:'100px'}} alt='user'></img>
     </div>
         ))
      }
      
      <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

    </div>
  )
}

export default Users
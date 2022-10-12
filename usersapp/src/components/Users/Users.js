import React, { useEffect, useState } from 'react'
import GetData from '../../utilities/services'

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetData().then((response) => setData(response.data));
  }, []);
  console.log(data)

  return (
    <div>indjbhbhex</div>
  )
}

export default Users
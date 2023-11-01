import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Category  = ({ route }) => {
  const { categoryId } = route.params;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/category/' + categoryId )
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  console.log(data);
  return (
    <div>Category</div>
  )
}

export default Category
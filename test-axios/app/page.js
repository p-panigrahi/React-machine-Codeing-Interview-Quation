"use client";

import axios from "axios";
import { useState } from "react";

axios;
const page = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState();
  const getImages = async () => {
    try{
      const res = await axios.get("https://picsum.photos/v2/list");
      setImages(res.data);
      console.log(images)
    }catch(error){
      setError(error.message);
    }
  };
  return (
    <>
      <button
        className="px-5 py-5 bg-gray-500 text-white font-bold"
        onClick={getImages}
      >
        Get Image
      </button>
      <div className="p-10">
        {error !== "" && <h1>{error}</h1>}
        {images.map((elem,i)=>{
          return (
            <img key={i} src={elem.download_url} width={300} height={300} className="m-10 rounded inline-block"/>
          )
        })}
      </div>
    </>
  );
};

export default page;

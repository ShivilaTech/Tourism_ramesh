import React, { useEffect, useState } from 'react';
import './ScrollAd.css';

import Ad1 from '../../footer/pic/6a2cf129.jpeg'
import axios from 'axios';

const ScrollAd = ( name) => {
  useEffect(() => {
    loadAdds();
  }, [])
  const [images, setImages] = useState();
  console.log(name.name, "adds12");
  
  const loadAdds = async () => {

    const { data } = await axios.post(`http://137.184.22.70:3008/adds/getAll`,
    )
    console.log(data.status, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setImages(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };

  return (
    <>
      <div className="marquee-container">
        {
          images && images.map((i) => {
            if(i.name == 'home'){
            return <div className="marquee">
              {/* <span>{i.image_url} </span> &nbsp; */}

              <a href={i.url} target='_blank'><img src={`http://137.184.22.70:3008/add/${i.image_url}`} alt="" height={80} width={300} /></a>
            </div>
            }else{
              return null;
            }
          })
        }

      </div>


    </>
  )
}

export default ScrollAd




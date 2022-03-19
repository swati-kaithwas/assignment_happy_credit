import React, { useState, useEffect } from "react";
import "./Pic.css";
export const Pic = () => {
  const [data, setData] = useState([
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/11060750/hm-60-off-1-516x500.jpg",
      name: "H&M",
      description: "Clothing essentials",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/10/18100234/pinkapple-dresses-30-2.jpg",
      name: "Darling dresses",
      description: "Pinkapple Dresses",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/28093308/Teleflora-special-20-off.jpg",
      name: "Flowers for every occasion",

      description: "Teleflora",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/11060750/hm-60-off-1-516x500.jpg",
      name: "H&M",
      description: "Clothing essentials",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/28093308/Teleflora-special-20-off.jpg",
      name: "Flowers for every occasion",

      description: "Teleflora",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/10/18100234/pinkapple-dresses-30-2.jpg",
      name: "Darling dresses",
      description: "Pinkapple Dresses",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/28093308/Teleflora-special-20-off.jpg",
      name: "Flowers for every occasion",

      description: "Teleflora",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/10/18100234/pinkapple-dresses-30-2.jpg",
      name: "Darling dresses",
      description: "Pinkapple Dresses",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/11060750/hm-60-off-1-516x500.jpg",
      name: "H&M",
      description: "Clothing essentials",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/11060750/hm-60-off-1-516x500.jpg",
      name: "H&M",
      description: "Clothing essentials",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/28093308/Teleflora-special-20-off.jpg",
      name: "Flowers for every occasion",

      description: "Teleflora",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/10/18100234/pinkapple-dresses-30-2.jpg",
      name: "Darling dresses",
      description: "Pinkapple Dresses",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/05/28093308/Teleflora-special-20-off.jpg",
      name: "Flowers for every occasion",

      description: "Teleflora",
    },
    {
      image:
        "https://www.klarna.com/assets/sites/2/2020/10/18100234/pinkapple-dresses-30-2.jpg",
      name: "Darling dresses",
      description: "Pinkapple Dresses",
    },
  ]);
  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.value == "A-Z") {
      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (e.target.value == "Featured") {
      setData(data.sort((a, b) => b.name.localeCompare(a.name)));
    }
  }
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <>
      <div className="filterfeature">
        <h4>{data.length} deals</h4>
        <div>
          <select onChange={handleChange} className="selectfilter">
            <option value="Featured">Featured</option>
            <option value="A-Z">A-Z</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>

      <div className="data_grid">
        {data.map((p, i) => (
          <div key={i}>
            <img src={p.image} className="img" alt="landscape" />
            <h4>{p.name}</h4>
            <div className="des">{p.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

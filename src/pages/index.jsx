import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import InfiniteScroll from "react-infinite-scroller";
import InfiniteScroll from "react-infinite-scroll-component";

import { API_PATH, CX, KEY } from "@/utils/constant";
import SearchItem from "@/components/SearchItem";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [next, setNext] = useState(false);

  const getData = async (page = 0) => {
    // const results = await axios.get(API_PATH, {
    //   params: {
    //     imgSize: "small",
    //     cr: "vn",
    //     cx: CX,
    //     key: KEY,
    //     q: searchQuery,
    //     exactTerms: "BookingCare",
    //     start: page,
    //   },
    // });
    const results = await axios.get("http://localhost:3000/api");
    console.log(results);
    return results.data.items;
  };

  const handleClick = async () => {
    const results1 = await getData();
    // const results2 = await getData("11");
    // setData([...results1, ...results2]);
    setNext(true);
    setData(results1);
  };

  const cailon = () => {
    setData((prev) => [
      ...prev,
      {
        title: "hehe",
        snippet: "haha",
        pagemap: {
          cse_image: [
            {
              src: "https://bookingcare.vn/assets/icon/bookingcare-2020.svg",
            },
          ],
        },
      },
    ]);
    // console.log(1);
    alert(1);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://bookingcare.vn/assets/anh/bookingcare-cover-4.jpg')`,
          height: "680px",
          objectFit: "cover",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "36px",
            color: "#46C3D2",
            position: "absolute",
            right: "50%",
            transform: "translate(50%, 109%)",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "700",
          }}
        >
          <h1>Nền tảng y tế</h1>
          <h1>chăm sóc sức khỏe toàn diện</h1>
        </div>
        {/* input */}
        <div
          style={{
            width: "460px",
            height: "52px",
            position: "absolute",
            right: "35%",
            bottom: "50%",
          }}
        >
          <AiOutlineSearch
            style={{ transform: " translate(10px, 39px)", fontSize: " 23px" }}
          ></AiOutlineSearch>
          <input
            type="text"
            placeholder="search..."
            style={{
              paddingLeft: "50px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(247,216,0,0.7)",
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              color: "black",
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          ></input>
          <button onClick={handleClick}>Click me!</button>
        </div>
      </div>
      {/* <div
        className="contents"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div>
          {data &&
            data.map((gido, i) => (
              <SearchItem item={gido} key={i}></SearchItem>
            ))}
        </div>
      </div> */}
      <a
        href="https://bookingcare.vn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        click vao day
      </a>
      <div
        className="contents"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <InfiniteScroll
          scrollThreshold={1}
          dataLength={data.length}
          next={cailon}
          hasMore={next}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {data.map((item, i) => (
            <a
              href="https://bookingcare.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SearchItem key={i} item={item}></SearchItem>
            </a>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;

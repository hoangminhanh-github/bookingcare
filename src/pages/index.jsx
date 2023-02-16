import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";

import { API_PATH, CX, KEY } from "@/utils/constant";
import SearchItem from "@/components/SearchItem";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(0);
  const getData = async (start = 0) => {
    const results = await axios.get(API_PATH, {
      params: {
        imgSize: "small",
        cr: "vn",
        cx: CX,
        key: KEY,
        q: searchQuery,
        exactTerms: "BookingCare",
        start: start,
      },
    });
    setPage((prev) => prev + 10);
    return results.data.items;
  };

  const handleClick = async () => {
    const results1 = await getData();
    let resultsRequire20 = [];
    if (data.length == 0) {
      resultsRequire20 = await getData("11");
      setData([...results1, ...resultsRequire20]);
    } else {
      setData(results1);
    }
    setNext(true);
  };

  const nextFunction = async () => {
    const results = await getData(page + 10);
    if (results instanceof Array) {
      setData((prev) => [...prev, ...results]);
    } else {
      alert("Kết quả cuối cùng !! Search với từ khóa khác để có thêm kết quả");
    }
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
          <button
            style={{
              position: "absolute",
              top: "44%",
              right: "0px",
              backgroundColor: "#c8622eb3",
              height: "100%",
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              paddingLeft: "4px",
            }}
            onClick={handleClick}
          >
            Tìm kiếm
          </button>
        </div>
      </div>
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
          next={nextFunction}
          hasMore={next}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {data.map((item, i) => (
            <a href={item?.link} target="_blank" rel="noopener noreferrer">
              <SearchItem key={i} item={item}></SearchItem>
            </a>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;

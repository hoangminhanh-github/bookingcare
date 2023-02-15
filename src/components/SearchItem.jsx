import React from "react";

const SearchItem = ({ item }) => {
  return (
    <div
      style={{
        width: "900px",
        height: "277px",
        display: "flex",
        boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
        padding: "4px",
        borderRadius: "4px",
        gap: "10px",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <img
        src={
          item.pagemap.cse_image
            ? item.pagemap.cse_image[0].src
            : "public/favicon.ico"
        }
        alt=""
        width={"30%"}
        style={{
          height: "70%",
          objectFit: "cover",
          flex: "1",
          borderRadius: "6px",
        }}
      />
      <div>
        <h4 style={{ color: "#46C3D2" }}>{item.title}</h4>
        <span style={{ color: "#555" }}>{item.snippet}</span>
      </div>
    </div>
  );
};

export default SearchItem;

import React from "react";

const SubRefractor = (props) => {
  return (
    <div
      className={`${props.className} w-[800px] mx-auto my-4 text-6xl text-[#50d71e] bg-cyan-700`}
    >
      Chào mừng bạn đến với REACTJS {props.children}
    </div>
  );
};

export default SubRefractor;

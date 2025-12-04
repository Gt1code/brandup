import React from "react";
import ScrollVelocity from "@/component/ScrollVelocity";

function Scroll({ velocity }) {
  return (
    <div className="my-8">
      <ScrollVelocity
        texts={[
          "Transparent | Reliable | Fast | Affordable | Integrity | Structure | ",
        ]}
        velocity={velocity}
        className="custom-scroll-text font-hero text-2xl/9 font-light"
      />
    </div>
  );
}

export default Scroll;

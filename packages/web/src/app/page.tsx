"use client";

import React from "react";
import Image from "next/image";

import map from "@kamf-safety/web/assets/map.png";
import timetable from "@kamf-safety/web/assets/timetable.png";

const MapPage: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "32px",
    }}
  >
    <Image
      src={map}
      alt="KAMF map"
      style={{ width: "100%", maxWidth: "600px", height: "auto" }}
    />
    <Image
      src={timetable}
      alt="KAMF timetable"
      style={{ width: "100%", maxWidth: "600px", height: "auto" }}
    />
  </div>
);

export default MapPage;

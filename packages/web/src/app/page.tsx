"use client";

import React from "react";
import Image from "next/image";

import map from "@kamf-safety/web/assets/map.png";
import timetable from "@kamf-safety/web/assets/timetable.png";
import styled from "styled-components";

const MapPageBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const MapPage: React.FC = () => (
  <MapPageBackground>
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
  </MapPageBackground>
);

export default MapPage;

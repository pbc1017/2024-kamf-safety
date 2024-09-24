"use client";

import React from "react";
import Image from "next/image";

import map from "@kamf-safety/web/assets/map_kr.png";
import timetable from "@kamf-safety/web/assets/timetable_kr.png";
import styled from "styled-components";
import Typography from "../common/components/Typography";

const MapPageBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MapPage: React.FC = () => (
  <MapPageBackground>
    <Typography fs={32} color="WHITE" fw="BOLD">
      TIMETABLE
    </Typography>
    <Image
      src={timetable}
      alt="KAMF timetable"
      style={{ width: "100%", maxWidth: "600px", height: "auto" }}
    />
    <Typography fs={32} color="WHITE" fw="BOLD">
      MAP
    </Typography>
    <Image
      src={map}
      alt="KAMF map"
      style={{ width: "100%", maxWidth: "600px", height: "auto" }}
    />
  </MapPageBackground>
);

export default MapPage;

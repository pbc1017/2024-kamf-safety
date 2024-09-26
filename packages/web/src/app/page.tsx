"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import map_kr from "@kamf-safety/web/assets/map_kr.png";
import timetable_kr from "@kamf-safety/web/assets/timetable_kr.png";
import styled from "styled-components";
import Typography from "../common/components/Typography";
import BoothListItem from "../common/components/BoothListItem";
import { booth } from "../constants/booth";
import LocalStorage from "../utils/localStorage";
import CircleSpinner from "../common/components/Spinner/CircleSpinner";

const MapPageBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MapPage: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState<boolean | null>(null);

  useEffect(() => {
    setIsEnglish(LocalStorage.getItem("isEnglish") === "true");
  }, []);

  if (isEnglish === null) {
    return <CircleSpinner />;
  }

  return (
    <MapPageBackground>
      <Typography fs={32} color="WHITE" fw="BOLD">
        {isEnglish ? "TIMETABLE" : "시간표"}
      </Typography>
      <Image
        src={timetable_kr}
        alt="KAMF timetable"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
      <Typography fs={32} color="WHITE" fw="BOLD">
        {isEnglish ? "MAP" : "지도"}
      </Typography>
      <Image
        src={map_kr}
        alt="KAMF map"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
      <Typography fs={32} color="WHITE" fw="BOLD">
        {isEnglish ? "BOOTH" : "부스"}
      </Typography>
      {booth.map(item => (
        <BoothListItem
          key={item.index}
          index={item.index}
          title={isEnglish ? item.name_en : item.name_kr}
        />
      ))}
    </MapPageBackground>
  );
};

export default MapPage;

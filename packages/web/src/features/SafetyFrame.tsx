"use client";

import React, { useEffect, useState } from "react";
import Button from "@kamf-safety/web/common/components/Button";
import FlexWrapper from "@kamf-safety/web/common/components/FlexWrapper";
import Typography from "@kamf-safety/web/common/components/Typography";

const SafetyFrame = () => {
  const [total, setTotal] = useState(0);
  const [myIncrement, setMyIncrement] = useState(
    parseInt(localStorage.getItem("myI") || "0"),
  );
  const [myDecrement, setMyDecrement] = useState(
    parseInt(localStorage.getItem("myD") || "0"),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTotal(100 + myIncrement - myDecrement);
    }, 10000);

    return () => clearInterval(timer);
  }, [myIncrement, myDecrement]);

  const handleIncrement = () => {
    localStorage.setItem("myI", (myIncrement + 1).toString());
    setMyIncrement(myIncrement + 1);
  };

  const handleDecrement = () => {
    localStorage.setItem("myD", (myDecrement + 1).toString());
    setMyDecrement(myDecrement + 1);
  };

  return (
    <FlexWrapper direction="column" gap={32} justify="center">
      <FlexWrapper direction="column" gap={12} style={{ alignItems: "center" }}>
        <Typography fs={24} fw="BOLD" style={{ alignSelf: "center" }}>
          2024 KAMF 안전관리
        </Typography>
        <Typography fs={16} color="GRAY.300">
          총 인원은 10초마다 동기화됩니다.
        </Typography>
      </FlexWrapper>
      <FlexWrapper direction="column" gap={20} style={{ alignItems: "center" }}>
        <Typography fs={20} fw="MEDIUM">
          총 인원
        </Typography>
        <Typography fs={16}>{total}명</Typography>
      </FlexWrapper>
      <FlexWrapper direction="row" gap={40}>
        <FlexWrapper
          direction="column"
          gap={20}
          style={{ alignItems: "center" }}
        >
          <Typography fs={20} fw="MEDIUM">
            내가 센 입장 인원
          </Typography>
          <Typography fs={16}>{myIncrement}명</Typography>
        </FlexWrapper>
        <FlexWrapper
          direction="column"
          gap={20}
          style={{ alignItems: "center" }}
        >
          <Typography fs={20} fw="MEDIUM">
            내가 센 퇴장 인원
          </Typography>
          <Typography fs={16}>{myDecrement}명</Typography>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper direction="column" gap={20}>
        <Button onClick={handleIncrement}>입장</Button>
        <Button type="outlined" onClick={handleDecrement}>
          퇴장
        </Button>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default SafetyFrame;

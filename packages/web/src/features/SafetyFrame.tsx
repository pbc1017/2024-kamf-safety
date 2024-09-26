"use client";

import React, { useEffect, useState } from "react";
import Button from "@kamf-safety/web/common/components/Button";
import FlexWrapper from "@kamf-safety/web/common/components/FlexWrapper";
import Typography from "@kamf-safety/web/common/components/Typography";
import postSafetyCount from "./services/postSafetyCount";
import LocalStorage from "../utils/localStorage";

const SafetyFrame = () => {
  const [total, setTotal] = useState("-");
  const [myIncrement, setMyIncrement] = useState(
    parseInt(LocalStorage.getItem("myI") || "0"),
  );
  const [myDecrement, setMyDecrement] = useState(
    parseInt(LocalStorage.getItem("myD") || "0"),
  );

  useEffect(() => {
    const timer = setInterval(async () => {
      const userId = LocalStorage.getItem("user") || "";
      const data = await postSafetyCount({
        userId,
        increment: myIncrement,
        decrement: myDecrement,
      });
      setTotal(data.total.toString());
    }, 5000);

    return () => clearInterval(timer);
  }, [myIncrement, myDecrement]);

  const handleIncrement = () => {
    LocalStorage.setItem("myI", (myIncrement + 1).toString());
    setMyIncrement(myIncrement + 1);
  };

  const handleDecrement = () => {
    LocalStorage.setItem("myD", (myDecrement + 1).toString());
    setMyDecrement(myDecrement + 1);
  };

  const handelLogout = () => {
    LocalStorage.removeItem("user");
    LocalStorage.removeItem("myI");
    LocalStorage.removeItem("myD");
    window.location.reload();
  };

  return (
    <FlexWrapper direction="column" gap={32} justify="center">
      <FlexWrapper direction="column" gap={12} style={{ alignItems: "center" }}>
        <Typography
          fs={24}
          fw="BOLD"
          color="WHITE"
          style={{ alignSelf: "center" }}
        >
          2024 KAMF 안전관리
        </Typography>
        <Typography fs={16}>총 인원은 5초마다 동기화됩니다.</Typography>
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
        <Button type="outlined" onClick={handleIncrement}>
          입장
        </Button>
        <Button type="outlined" onClick={handleDecrement}>
          퇴장
        </Button>
      </FlexWrapper>
      <Button type="outlined" onClick={handelLogout}>
        로그아웃
      </Button>
    </FlexWrapper>
  );
};

export default SafetyFrame;

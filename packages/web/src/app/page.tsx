"use client";

import Button from "../common/components/Button";
import FlexWrapper from "../common/components/FlexWrapper";
import Typography from "../common/components/Typography";

const Home = () => (
  <FlexWrapper direction="column" gap={32} justify="center">
    <Typography fs={24} fw="BOLD" style={{ alignSelf: "center" }}>
      2024 KAMF 안전관리
    </Typography>
    <FlexWrapper direction="column" gap={20} style={{ alignItems: "center" }}>
      <Typography fs={20} fw="MEDIUM">
        총 인원
      </Typography>
      <Typography fs={16}>000명</Typography>
    </FlexWrapper>
    <FlexWrapper direction="row" gap={40}>
      <FlexWrapper direction="column" gap={20} style={{ alignItems: "center" }}>
        <Typography fs={20} fw="MEDIUM">
          내가 센 입장 인원
        </Typography>
        <Typography fs={16}>00명</Typography>
      </FlexWrapper>
      <FlexWrapper direction="column" gap={20} style={{ alignItems: "center" }}>
        <Typography fs={20} fw="MEDIUM">
          내가 센 퇴장 인원
        </Typography>
        <Typography fs={16}>00명</Typography>
      </FlexWrapper>
    </FlexWrapper>
    <FlexWrapper direction="column" gap={20}>
      <Button type="outlined">입장</Button>
      <Button>퇴장</Button>
    </FlexWrapper>
  </FlexWrapper>
);

export default Home;

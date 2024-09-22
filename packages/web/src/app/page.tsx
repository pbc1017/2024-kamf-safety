"use client";

import styled from "styled-components";
import Typography from "../common/components/Typography";
import Button from "../common/components/Button";

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Home = () => (
  <MainPageWrapper>
    <Typography>총 인원</Typography>
    <Typography>000명</Typography>
    <CountWrapper>
      <MainPageWrapper>
        <Typography>내가 센 입장 인원</Typography>
        <Typography>00명</Typography>
      </MainPageWrapper>
      <MainPageWrapper>
        <Typography>내가 센 퇴장 인원</Typography>
        <Typography>00명</Typography>
      </MainPageWrapper>
    </CountWrapper>

    <Button type="outlined">입장</Button>
    <Button>퇴장</Button>
  </MainPageWrapper>
);

export default Home;

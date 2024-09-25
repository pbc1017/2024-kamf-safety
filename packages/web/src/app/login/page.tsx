"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import FlexWrapper from "@kamf-safety/web/common/components/FlexWrapper";
import Typography from "@kamf-safety/web/common/components/Typography";
import themes from "@kamf-safety/web/styles/themes";
import postLogin from "@kamf-safety/web/features/services/postLogin";

const LoginPage: React.FC = () => {
  const [studentId, setStudentId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userId = await postLogin({
      studentId: Number(studentId),
      password,
    });
    localStorage.setItem("user", userId.userId);
    router.push("/safety");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "20px",
        }}
      >
        <Typography
          fs={24}
          fw="BOLD"
          color="WHITE"
          style={{ marginBottom: "12px" }}
        >
          안전관리 로그인
        </Typography>
        <FlexWrapper direction="column" gap={12}>
          <Typography fs={16}>학번</Typography>
          <input
            id="studentId"
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </FlexWrapper>
        <FlexWrapper direction="column" gap={12}>
          <Typography fs={16}>비밀번호</Typography>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </FlexWrapper>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: themes.colors.WHITE,
            color: "black",
            border: "none",
            borderRadius: "4px",
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

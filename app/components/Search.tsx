"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [ysxdf, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${ysxdf}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "1rem",
        boxShadow: "1px 1px 5px black",
        padding: "1rem",
        borderRadius: "1rem",
        margin: "1rem",
      }}
    >
      <input
        type="text"
        value={ysxdf}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        style={{ width: "40rem", height: "24px" }}
      />
      <button style={{ height: "27px", width: "48px", cursor: "pointer" }}>
        🚀
      </button>
    </form>
  );
}

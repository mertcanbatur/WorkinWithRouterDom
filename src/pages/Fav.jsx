import React from "react";
import { Navigate } from "react-router-dom";

export default function Fav({ user }) {
  if (!user?.id) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }
  return <div>Fav</div>;
}

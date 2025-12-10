"use client";

import React, { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
      {children}
    </div>
  );
};

export default Card;

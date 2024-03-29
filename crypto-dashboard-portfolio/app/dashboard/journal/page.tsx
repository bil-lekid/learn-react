"use client";
import React, { useState } from "react";
import { RestClientV5 } from "bybit-api";

const Journal = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
  const client = new RestClientV5({
    key: apiKey,
    secret: apiSecret,
  });
  const [btcPrice, setBtcPrice] = useState(0);

  const getBtcPrice = async () => {
    const response = await client.getWalletBalance({
      accountType: "UNIFIED",
    });

    console.log("response:", response);
  };
  return (
    <div>
      <button onClick={getBtcPrice}>show btc price</button>
      <h1>{btcPrice}</h1>
    </div>
  );
};

export default Journal;

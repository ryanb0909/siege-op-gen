/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";

import { Navbar } from "../components/navbar";

import Defenders from "./constants/defenders";
import Attackers from "./constants/attackers";

export default function Home() {
  const [defender, setDefender] = useState("");
  const [attacker, setAttacker] = useState("");

  const getAttacker = () => {
    const randAttacker =
      Attackers[Math.floor(Math.random() * Attackers.length)];

    return randAttacker;
  };

  const getDefender = () => {
    const randDefender =
      Defenders[Math.floor(Math.random() * Defenders.length)];

    return randDefender;
  };

  const onClickAttacker = () => {
    const selectedAttacker = getAttacker();

    setAttacker(selectedAttacker);
    setDefender("");
  };

  const onClickDefender = () => {
    const selectedDefender = getDefender();

    setDefender(selectedDefender);
    setAttacker("");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10">
      <Navbar />
      <div className="flex gap-10">
        <Button
          className="bg-gradient-to-tr from-blue-200 to-blue-500 text-white shadow-lg"
          radius="full"
          size="lg"
          variant="solid"
          onClick={onClickAttacker}
        >
          Attacker
        </Button>
        <Button
          className="bg-gradient-to-tr from-orange-200 to-orange-500 text-white shadow-lg"
          radius="full"
          size="lg"
          variant="solid"
          onClick={onClickDefender}
        >
          Defender
        </Button>
      </div>
      <div className="flex flex-col items-center gap-4 mt-8">
        {attacker && (
          <div>
            <img
              alt={attacker}
              src={`/Images/Attackers/${attacker}.jpg`}
              style={{ width: "400px", height: "500px", marginTop: "10px" }}
            />
          </div>
        )}
        {defender && (
          <div>
            <img
              alt={defender}
              src={`/Images/Defenders/${defender}.jpg`}
              style={{ width: "400px", height: "500px", marginTop: "10px" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

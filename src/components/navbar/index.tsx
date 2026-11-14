"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";

import Burger from "./burger";
import Stairs from "../stairs";
import Menu from "./menu";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu closeMenu={() => setMenuIsOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

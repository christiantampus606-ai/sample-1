/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = "w-10 h-10" }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Left Arc (Bottom-to-Left, going clockwise to left arrow) */}
      <path
        d="M 88 56 A 39 39 0 1 1 10 48"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="butt"
        fill="none"
      />
      {/* Left Arrowhead pointing UP */}
      <polygon
        points="10,34 3.5,46 16.5,46"
        fill="currentColor"
      />

      {/* Outer Right Arc (Top-to-Right, going clockwise to right arrow) */}
      <path
        d="M 12 44 A 39 39 0 1 1 90 52"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="butt"
        fill="none"
      />
      {/* Right Arrowhead pointing DOWN */}
      <polygon
        points="90,66 83.5,54 96.5,54"
        fill="currentColor"
      />

      {/* Central Droplet with Knockout H (evenodd fill rule allows perfect transparency) */}
      <path
        d="M50 26C41 38 33 47 33 58C33 67.3888 40.6112 75 50 75C59.3888 75 67 67.3888 67 58C67 47 59 38 50 26ZM43 50H47V56H53V50H57V66H53V60H47V66H43V50Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

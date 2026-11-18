import localFont from "next/font/local";

// UPDATE: Replace with fonts from brand intake.
// See instructions/design-system.md for recommended pairings by tone.

export const bodyFont = localFont({
  src: [{ path: "./fonts/Inter-variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = localFont({
  src: [
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

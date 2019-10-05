import { createGlobalStyle, css } from "styled-components";

export const fontUrl = "https://rsms.me/inter/inter.css";

export const color = {
  // Pallete
  primary: "#40A7E3",
  secondary: "#5DC452",

  // Text
  heading: "#1A202C",
  lead: "#2D3748",
  muted: "#999999",

  // Bacground
  bacground: "#DCE1E6",

  // Monochrome
  light: "#F1F1F1",
  medium: "#E2E8F0",
  dark: "#BBBBBB",

  // Status
  positive: "#68D391",
  negative: "#FC8181",
  warning: "#F6AD55",

  // Shadow
  shadowPrimary: "#CCD4DA",
  shadowSecondary: "#B5DABE"
};

export const bodyStyles = css`
  font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  color: ${color.lead};

  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  margin: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 2.375rem;
  }

  .text-muted {
    font-size: 1.5rem;
    color: ${color.muted};
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

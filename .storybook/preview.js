import "../lib/index.scss";
import "./style.scss";

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        ["Getting started", "Installation", "Changelog"],
        "Examples",
        "Accessibility",
        "API Reference",
      ],
    },
  },
};

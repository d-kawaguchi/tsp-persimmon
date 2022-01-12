import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { withScreenshot } from "storycap"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

export const decorators = [withScreenshot]

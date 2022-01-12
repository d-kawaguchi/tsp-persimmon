import { ComponentStoryObj, ComponentMeta } from "@storybook/react"
import { Button } from "./Button"

type ButtonType = typeof Button

const meta: ComponentMeta<ButtonType> = { component: Button }
export default meta

export const Primary: ComponentStoryObj<ButtonType> = {
  args: { primary: true, label: "button" },
}

export const Secondary: ComponentStoryObj<ButtonType> = {
  args: {
    ...Primary.args,
    primary: false,
  },
}

export const Large: ComponentStoryObj<ButtonType> = {
  args: { label: "Button", size: "large" },
}

export const Small: ComponentStoryObj<ButtonType> = {
  args: {
    ...Large.args,
    size: "small",
  },
}

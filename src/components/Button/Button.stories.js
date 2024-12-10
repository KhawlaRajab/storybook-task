import React from "react";
import Button from "../Button/Button";


export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "radio" },
      options: ["blue", "red", "green"],
    },
  },

}


const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  varient: "primary",
  color: "blue",
  size: "small",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  varient: "secondary",
  color: "red",
  size: "medium",
};

export const Text = Template.bind({});
Text.args = {
  children: "Text",
  varient: "text",
  color: "green",
  size: "large",
};
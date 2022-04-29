import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  isBig: false,
  children: "Hello world",
};

export const BigButton = Template.bind({});
BigButton.args = {
  isBig: true,
  children: "Hello world",
};

export const Primary = Template.bind({});
Primary.args = {
  isBig: true,
  children: "Hello world",
};

export const Secondary = Template.bind({});
Secondary.args = {
  isBig: true,
  children: "Hello world",
};

export const Success = Template.bind({});
Success.args = {
  isBig: true,
  children: "Hello world",
};

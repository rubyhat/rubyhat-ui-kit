import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../components/Input/Input";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  isBig: false,
  placeholder: "Hello world",
  label: "Default Label",
};

export const BigInput = Template.bind({});
BigInput.args = {
  isBig: true,
  placeholder: "Hello world",
  label: "Default Label",
};

export const Primary = Template.bind({});
Primary.args = {
  isBig: false,
  placeholder: "Hello world",
  label: "Primary Input",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  isBig: false,
  placeholder: "Hello world",
  label: "Secondary Input",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  isBig: false,
  placeholder: "Hello world",
  label: "Success Input",
  variant: "success",
};

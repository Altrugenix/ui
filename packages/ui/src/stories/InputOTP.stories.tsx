import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputOTP } from "~/components/ui/input-otp";
import { useState } from "react";

const meta: Meta<typeof InputOTP> = {
  title: "UI/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: (args) => {
    const [otp, setOtp] = useState("");
    return (
      <div className="flex flex-col items-center gap-4 p-10">
        <InputOTP
          {...args}
          value={otp}
          onChange={setOtp}
          onComplete={(val) => alert(`Completed: ${val}`)}
        />
        <p className="text-sm text-muted-foreground">Current Value: {otp}</p>
      </div>
    );
  },
};

export const Short: Story = {
  args: {
    length: 4,
  },
};

export const Long: Story = {
  args: {
    length: 8,
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
    value: "123456",
  },
};

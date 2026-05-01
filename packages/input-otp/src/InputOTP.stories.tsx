import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputOTP } from "@altrugenix/input-otp";
import { useState } from "react";

const meta: Meta<typeof InputOTP> = {
  title: "Forms/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A specialized multi-digit input for One-Time Passwords (OTP). Features automatic focus management between digits, backspace handling, and clipboard paste support.",
      },
    },
  },
  argTypes: {
    length: {
      control: { type: "number", min: 3, max: 10 },
      description: "Number of digit inputs (default: 6).",
      table: { category: "Appearance" },
    },
    value: {
      description: "Controlled OTP value string.",
      table: { category: "State" },
    },
    onChange: {
      description: "Callback triggered on every digit change.",
      table: { category: "Events" },
    },
    onComplete: {
      description: "Callback triggered when all digits are filled.",
      table: { category: "Events" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents all input interaction.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

const DefaultRender = (args: React.ComponentProps<typeof InputOTP>) => {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <InputOTP
        {...args}
        value={otp}
        onChange={setOtp}
        onComplete={(val) => alert(`Completed: ${val}`)}
      />
      <p className="text-muted-foreground text-sm">
        Current Value:{" "}
        <span className="font-mono font-semibold">{otp || "—"}</span>
      </p>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DefaultRender {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "A 6-digit OTP input with live value display. An alert fires when all digits are entered.",
      },
    },
  },
};

export const FourDigit: Story = {
  args: {
    length: 4,
  },
  render: (args) => <DefaultRender {...args} />,
  parameters: {
    docs: {
      description: {
        story: "A shorter 4-digit OTP — common for SMS verification codes.",
      },
    },
  },
};

export const EightDigit: Story = {
  args: {
    length: 8,
  },
  render: (args) => <DefaultRender {...args} />,
  parameters: {
    docs: {
      description: {
        story: "An 8-digit OTP for higher-security verification flows.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
    value: "123456",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A disabled OTP input with pre-filled digits — useful for display-only confirmation states.",
      },
    },
  },
};

const VerificationFlowDemo = () => {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h3 className="text-foreground text-lg font-semibold">
        Verify Your Email
      </h3>
      <p className="text-muted-foreground max-w-xs text-center text-sm">
        We sent a 6-digit code to your email. Enter it below to verify your
        account.
      </p>
      <InputOTP
        value={otp}
        onChange={setOtp}
        onComplete={() => setVerified(true)}
        disabled={verified}
      />
      {verified && (
        <p className="text-sm font-medium text-emerald-600">
          ✓ Email verified successfully!
        </p>
      )}
    </div>
  );
};

export const VerificationFlow: Story = {
  render: () => <VerificationFlowDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A complete email verification flow with instructional text and a success confirmation state.",
      },
    },
  },
};

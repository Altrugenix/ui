import type { Meta, StoryObj } from "@storybook/react-vite";
import { TransferList } from "~/components/ui/transfer-list";

const meta: Meta<typeof TransferList> = {
  title: "UI/TransferList",
  component: TransferList,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  args: {
    items: ["Task A", "Task B", "Task C", "Task D", "Task E", "Task F"],
    initialSelected: ["Task B"],
    titles: ["Available Tasks", "Assigned Tasks"],
    readOnly: true,
    onChange: () => {},
  },
};

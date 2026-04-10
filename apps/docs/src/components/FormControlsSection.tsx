import { useState } from "react";
import {
  Heading,
  Text,
  Card,
  Autocomplete,
  Checkbox,
  DatePicker,
  Input,
  Radio,
  Select,
  Slider,
  Switch,
  Textarea,
} from "@altrugenix/ui";

export function FormControlsSection() {
  const [sliderValue, setSliderValue] = useState(50);
  const [autoValue, setAutoValue] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card className="space-y-6 p-6">
        <Heading level={4}>Inputs & Text</Heading>
        <Input label="Username" placeholder="e.g. chesteralan" />
        <Textarea label="Bio" placeholder="Tell us about yourself..." />
        <Autocomplete
          label="Tag Search"
          placeholder="Search components..."
          options={["Button", "Card", "Modal", "Timeline", "Avatar"]}
          value={autoValue}
          onChange={setAutoValue}
        />
      </Card>

      <Card className="space-y-6 p-6">
        <Heading level={4}>Selects & Sliders</Heading>
        <Select label="Priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <div className="space-y-3">
          <div className="flex justify-between">
            <Text className="font-medium">Opacity</Text>
            <Text className="text-muted-foreground">{sliderValue}%</Text>
          </div>
          <Slider
            value={sliderValue}
            onChange={(e) => setSliderValue(parseInt(e.target.value))}
          />
        </div>
        <div className="space-y-1.5">
          <Text className="text-sm font-medium">Start Date</Text>
          <DatePicker value={date} onChange={setDate} />
        </div>
      </Card>

      <Card className="space-y-6 p-6">
        <Heading level={4}>Switches & Selections</Heading>
        <div className="space-y-4">
          <Switch label="Marketing Emails" />
          <div className="space-y-3 pt-2">
            <Text className="text-sm font-medium">Account Type</Text>
            <div className="flex gap-4">
              <Radio label="Personal" name="acc" defaultChecked />
              <Radio label="Business" name="acc" />
            </div>
          </div>
          <Checkbox
            label="I agree to terms"
            description="Read our licensing agreement."
          />
        </div>
      </Card>
    </section>
  );
}

import type { Meta, StoryObj } from '@storybook/angular';
import { LibComponent } from '../lib/lib.component';

const meta: Meta<LibComponent> = {
  title: 'Button',
  component: LibComponent,
};

export default meta;
type Story = StoryObj<LibComponent>;

export const Default: Story = {
  args: {
    label: 'Hello World',
  },
};

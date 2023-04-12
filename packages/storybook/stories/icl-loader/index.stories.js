import { IclLoader } from '@/packages/icl-loader/src';

export default {
  title: 'components/icl-loader',
  component: IclLoader,
  parameters: {
    layout: 'centered',
  },
};

export const Primary = () => ({
  components: { IclLoader },
  template: `<icl-loader />`,
});

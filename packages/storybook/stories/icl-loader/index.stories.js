import { IclLoader } from '@inari/icl-loader';

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

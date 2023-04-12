import { IclLoader } from '@inari/icl-loader/src/index';

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

import { mount } from '@vue/test-utils';
import IclLoader from './icl-loader.vue';

describe('icl-loader.vue', () => {
  const getWrapper = (params) => mount(IclLoader, params);

  test('mount component', async () => {
    expect(IclLoader).toBeTruthy();
    const wrapper = getWrapper();
    const loadingBars = wrapper.findAll('.loading-bar');
    expect(loadingBars.length).toBe(4);
  });
});

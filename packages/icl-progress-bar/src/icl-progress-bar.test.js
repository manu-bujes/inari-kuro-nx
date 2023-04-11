import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import IclProgressBar from './icl-progress-bar.vue';

describe('icl-loader.vue', () => {
  const getWrapper = (params) => mount(IclProgressBar, params);
  const value = 50;
  test('mount component', async () => {
    expect(IclProgressBar).toBeTruthy();
    const wrapper = getWrapper({ props: { value } });
    expect(wrapper.text()).toContain('50%');
  });
  describe('state', () => {
    test('should display error if value <= 25', async () => {
      const wrapper = getWrapper({ props: { value: 25 } });
      const bar = wrapper.find('.progress-bar');
      expect(bar.classes()).toContain('error');
      expect(wrapper.text()).toContain('25%');
    });
    test('should display warning if value > 25 ', async () => {
      const wrapper = getWrapper({ props: { value: 27 } });
      const bar = wrapper.find('.progress-bar');
      expect(bar.classes()).toContain('warning');
      expect(wrapper.text()).toContain('27%');
    });
    test('should display warning if value < 75 ', async () => {
      const wrapper = getWrapper({ props: { value: 74 } });
      const bar = wrapper.find('.progress-bar');
      expect(bar.classes()).toContain('warning');
      expect(wrapper.text()).toContain('74%');
    });
    test('should display ok if value >= 75', async () => {
      const wrapper = getWrapper({ props: { value: 75 } });
      const bar = wrapper.find('.progress-bar');
      expect(bar.classes()).toContain('ok');
      expect(wrapper.text()).toContain('75%');
    });
    test('should display ok if value < 100', async () => {
      const wrapper = getWrapper({ props: { value: 99 } });
      const bar = wrapper.find('.progress-bar');
      expect(bar.classes()).toContain('ok');
      expect(wrapper.text()).toContain('99%');
    });
    test('should display success if value = 100', async () => {
      const wrapper = getWrapper({ props: { value: 100 } });
      const bar = wrapper.find('.progress-bar');
      expect(bar.classes()).toContain('success');
      expect(wrapper.text()).toContain('100%');
    });
    test('should round progress value', async () => {
      const wrapper = getWrapper({ props: { value: 77.83 } });
      const bar = wrapper.find('.progress-bar');
      expect(bar.classes()).toContain('ok');
      expect(wrapper.text()).toContain('78%');
    });
  });
});

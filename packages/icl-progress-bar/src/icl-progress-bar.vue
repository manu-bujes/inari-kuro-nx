<script>
export default {
  name: 'IclProgressBar',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  /**
   * Progress of the bar.
   */
  value: {
    type: Number,
    default: 0,
  },
});

const colorBarClass = computed(() => {
  let className;
  if (props.value <= 25) {
    className = 'error';
  } else if (props.value > 25 && props.value < 75) {
    className = 'warning';
  } else if (props.value >= 75 && props.value < 100) {
    className = 'ok';
  } else {
    className = 'success';
  }
  return className;
});

const progressWitdh = computed(() => `width:${props.value}%`);

const progressValueAdjusted = computed(() => props.value.toFixed());
</script>

<template>
  <div class="icl-progress-bar">
    <div class="progress-bar" :class="colorBarClass">
      <div class="progress-bar-value" :style="progressWitdh"></div>
    </div>
    <div class="progress-text">
      <!--
        @slot Slot for the text
          @binding {string} value progress of the bar
      -->
      <slot :value="progressValueAdjusted"> {{ progressValueAdjusted }}% </slot>
    </div>
  </div>
</template>

<style src="./icl-progress-bar.scss" lang="scss"></style>

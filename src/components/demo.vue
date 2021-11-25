<template lang="pug">
h1 {{ msg }}
h1 {{ guojun }}
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Demo',
  props: {
    msg: String,
    abc: String,
  },
  emits: ['hello'],
  setup(props, context) {
    const { attrs, emit, slots } = context;
    console.info(props, attrs, emit, slots);
    const guojun = inject('guojun');
    setTimeout(() => {
      emit('hello');
    }, 2000);
    return {
      guojun,
    };
  },
};
</script>

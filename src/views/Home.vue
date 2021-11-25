<template lang="pug">
div {{ name }}{{ age }}{{ nameStr }}{{ $t('common.loading') }}
div X:{{ point.x }} Y:{{ point.y }}
input(type="text" v-model="name")
input(type="text" v-model="age")
Demo(msg="guojun" abc="abc" @hello="name+='1'")
van-empty
van-button(type="primary") 按钮
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  toRefs,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onBeforeUnmount,
  watchEffect,
  provide,
  // getCurrentInstance,
} from 'vue';
import Demo from 'components/demo';
import usePoint from 'hooks/usePoint';

// import { getStudentToken } from '../api/seller';

export default defineComponent({
  name: 'App',
  components: {
    Demo,
  },
  setup() {
    // getStudentToken({ studentId: '1500766808' }).then(resData => {
    //   console.info(resData, 'guojun');
    // });
    // const { proxy } = getCurrentInstance();
    // console.info(proxy.$Toast('nihao'), 'guojun');
    let name = ref('nihoa');
    let obj = reactive({
      age: 18,
    });
    const nameStr = computed(() => {
      return `name:${name.value}`;
    });
    const point = usePoint();
    provide('guojun', name);
    watch(name, (newValue, oldValue) => {
      console.info(`name:${newValue}-${oldValue}`);
    });
    watch(obj, (newValue, oldValue) => {
      console.info('obj___:', newValue, oldValue);
    });
    watch(
      () => obj.age,
      (newValue, oldValue) => {
        console.info('age____:', newValue, oldValue);
      }
    );
    watchEffect(() => {
      console.info('watchEffect', `${name.value}----${obj.age}`);
    });
    onBeforeMount(() => {
      console.info('----onBeforeMount----');
    });
    onBeforeUpdate(() => {
      console.info('----onBeforeUpdate----');
    });
    onMounted(() => {
      console.info('----onMounted----');
    });
    onUpdated(() => {
      console.info('----onUpdated----');
    });
    onBeforeUnmount(() => {
      console.info('----onBeforeUnmount----');
    });
    onUnmounted(() => {
      console.info('----onUnmounted----');
    });
    return {
      name,
      nameStr,
      point,
      ...toRefs(obj),
    };
  },
});
</script>

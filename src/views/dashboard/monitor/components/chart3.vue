<script setup lang="ts">
import { useEcharts } from '@/hooks'
import type { ECOption } from '@/hooks'

const option = ref<ECOption>({
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%',
  },
  legend: {
    orient: 'horizontal',
    top: 30,
    padding: 5,
    itemWidth: 20,
    itemHeight: 12,
    textStyle: {
      color: '#777',
    },
  },
  series: [{
    type: 'pie',
    radius: ['45%', '60%'],
    center: ['50%', '50%'],
    label: {
      show: true,
      formatter: '{b} : {d}%',
      color: '#777',
    },
    labelLine: {
      show: true,
      length2: 10,
    },
    data: [
      {
        value: 335,
        name: 'Direct access',
      },
      {
        value: 77,
        name: 'Bilibili',
      },
      {
        value: 82,
        name: 'Zhihu',
      },
      {
        value: 421,
        name: 'Little Red Book',
      },
    ],
  }],
}) as Ref<ECOption>
useEcharts('lineRef', option)
</script>

<template>
  <div ref="lineRef" class="h-400px" />
</template>

<style scoped></style>

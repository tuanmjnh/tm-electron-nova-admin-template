<script setup lang="ts">
const text = ref('')
// Simulate ajax asynchronous acquisition of content
onMounted(() => {
  setTimeout(() => {
    text.value = '<p>Simulation Ajax Setting content asynchronously</p>'
  }, 1500)
})

const active = ref(false)
</script>

<template>
  <n-card title="Rich text editor">
    <n-space vertical :size="12">
      <n-alert title="Based on Quill packaging" type="success" />
      <n-switch v-model:value="active">
        <template #checked>
          Disable
        </template>
        <template #unchecked>
          Enable
        </template>
      </n-switch>
      <n-space :size="12">
        <div class="h-300px">
          <RichTextEditor v-model="text" :disabled="active" />
        </div>
        <div>
          <n-h2>v-html Preview</n-h2>
          <div v-html="text" />
        </div>
      </n-space>
    </n-space>
  </n-card>
</template>

<style scoped></style>

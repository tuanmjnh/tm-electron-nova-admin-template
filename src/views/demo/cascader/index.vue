<script setup lang="ts">
const value = ref()

const cbValue = ref()
const cbOption = ref()
const cbPathValues = ref()
function handleUpdateValue(value: string, option: any, pathValues: any[]) {
  cbValue.value = value
  cbOption.value = { code: option.code, name: option.name }
  cbPathValues.value = pathValues.map(i => ({ code: i.code, name: i.name }))
}

const formRef = ref()
const formValue = ref({
  region: null,
})

function handleValidateClick() {
  formRef.value?.validate((errors: any) => {
    if (!errors)
      window.$message.success('Valid')

    else
      window.$message.error('Invalid')
  })
}
</script>

<template>
  <n-card title="Provincial, municipal and district linkage">
    <n-h2>Currently selected administrative area:{{ value }}</n-h2>
    <PcaCascader v-model:value="value" @update:value="handleUpdateValue" />

    <div>
      <n-h2>callback value</n-h2>
      <pre class="bg-#eee:30">
      {{ cbValue }}
    </pre>
    </div>
    <div>
      <n-h2>Callback option</n-h2>
      <pre class="bg-#eee:30">
      {{ cbOption }}
    </pre>
    </div>
    <div>
      <n-h2>Callback pathValues</n-h2>
      <pre class="bg-#eee:30">
      {{ cbPathValues }}
    </pre>
    </div>

    <n-h2>Form Validation</n-h2>
    <n-form ref="formRef" inline :label-width="80" :model="formValue">
      <n-form-item label="area" path="region" :rule="[{ required: true, message: 'Region required' }]">
        <PcaCascader v-model:value="formValue.region" />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" @click="handleValidateClick">
          Verify
        </n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<style scoped></style>

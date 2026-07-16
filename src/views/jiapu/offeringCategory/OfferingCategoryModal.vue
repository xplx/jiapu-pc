<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    @ok="handleSubmit"
    :title="title"
    width="600px"
    destroyOnClose
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './offeringCategory.data';
  import { saveOrUpdate } from './offeringCategory.api';

  const emit = defineEmits(['register', 'success']);
  const isUpdate = ref(true);

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    schemas: formSchema,
    showActionButtonGroup: false,
    labelWidth: 120,
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    await resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      const record = { ...data.record };
      // belong 字典选项的 value 是字符串，回显时需转为字符串
      if (record.belong !== null && record.belong !== undefined) {
        record.belong = String(record.belong);
      }
      await setFieldsValue(record);
    }
  });

  const title = computed(() => (!unref(isUpdate) ? '新增祭品分类' : '编辑祭品分类'));

  async function handleSubmit() {
    try {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      await saveOrUpdate(values, isUpdate.value);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>

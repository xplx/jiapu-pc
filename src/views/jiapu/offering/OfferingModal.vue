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
  import { formSchema } from './offering.data';
  import { saveOrUpdate } from './offering.api';
  import { getAllList } from '../offeringCategory/offeringCategory.api';

  const emit = defineEmits(['register', 'success']);
  const isUpdate = ref(true);

  const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
    schemas: formSchema,
    showActionButtonGroup: false,
    labelWidth: 120,
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    await resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;
    // 动态加载上架分类列表
    const categoryList = await getAllList();
    await updateSchema({
      field: 'categoryId',
      componentProps: {
        options: categoryList.map((item) => ({ label: item.name, value: item.id })),
      },
    });
    if (unref(isUpdate)) {
      await setFieldsValue({ ...data.record });
    }
  });

  const title = computed(() => (!unref(isUpdate) ? '新增祭品' : '编辑祭品'));

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

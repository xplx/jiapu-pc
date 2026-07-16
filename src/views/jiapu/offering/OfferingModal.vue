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
  const CATEGORY_AUDIO = '2077301133075955713';

  const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
    schemas: formSchema,
    showActionButtonGroup: false,
    labelWidth: 120,
  });

  // 根据分类切换音频上传框显示
  async function toggleAudioField(categoryId) {
    const isAudio = categoryId === CATEGORY_AUDIO;
    await updateSchema({
      field: 'path',
      show: isAudio,
      required: isAudio,
    });
    // 切换分类时清空已上传的音频
    if (!isAudio) {
      await setFieldsValue({ path: undefined });
    }
  }

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
        onChange: (val) => toggleAudioField(val),
      },
    });
    if (unref(isUpdate)) {
      // 先切换音频框显示，再回填数据，避免清空已上传的文件
      await toggleAudioField(data.record?.categoryId);
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

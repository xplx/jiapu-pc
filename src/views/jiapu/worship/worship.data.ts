import { BasicColumn, FormSchema } from '/@/components/Table';

const categoryMap = { 1: '香烛', 2: '鲜花', 3: '供品', 4: '纸钱' };

export const columns: BasicColumn[] = [
  {
    title: '纪念馆ID',
    width: 180,
    dataIndex: 'memorialId',
  },
  {
    title: '祭品',
    width: 120,
    dataIndex: 'offeringName',
    customRender: ({ record }) => {
      const icon = record.offeringIcon || '';
      const name = record.offeringName || '-';
      return `${icon} ${name}`;
    },
  },
  {
    title: '分类',
    width: 80,
    dataIndex: 'offeringCategory',
    customRender: ({ text }) => categoryMap[text] || '-',
  },
  {
    title: '价格(族币)',
    width: 100,
    dataIndex: 'price',
  },
  {
    title: '用户',
    width: 120,
    dataIndex: 'userName',
  },
  {
    title: '留言',
    width: 200,
    dataIndex: 'message',
    customRender: ({ text }) => text || '-',
  },
  {
    title: '祭拜时间',
    width: 170,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'memorialId',
    label: '纪念馆ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'userId',
    label: '用户ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'offeringCategory',
    label: '祭品分类',
    component: 'Select',
    componentProps: {
      options: [
        { label: '香烛', value: 1 },
        { label: '鲜花', value: 2 },
        { label: '供品', value: 3 },
        { label: '纸钱', value: 4 },
      ],
      allowClear: true,
      placeholder: '请选择分类',
    },
    colProps: { span: 6 },
  },
];

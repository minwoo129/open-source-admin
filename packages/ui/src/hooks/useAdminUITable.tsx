import React, { ComponentProps, FC, Key, useState } from 'react';
import type { TableObject } from '../components/Table/types';
import Table from '../components/Table';

type useAdminUITableRetType<T extends TableObject> = [
  Key[],
  FC<Omit<ComponentProps<typeof Table<T>>, 'rowSelection'>>,
];

const useAdminUITable = <
  T extends TableObject,
>(): useAdminUITableRetType<T> => {
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

  const UITable: FC<Omit<ComponentProps<typeof Table<T>>, 'rowSelection'>> = (
    props,
  ) => {
    return (
      <Table
        {...props}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: selectedKeys,
          onChange: (selectedRowKeys) => {
            setSelectedKeys(selectedRowKeys);
          },
        }}
      />
    );
  };

  return [selectedKeys, UITable];
};

export default useAdminUITable;

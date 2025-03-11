import React, { ComponentProps } from 'react';
import { Table as AntdTable } from 'antd';
import useTable from './hooks/useTable';
import { TableProps } from './types';

const Table = <T extends {}>({
  datas,
  columns,
  filters,
  ...props
}: TableProps<T>) => {
  const { convertedColumns } = useTable<T>({ columns, datas, filters });
  return (
    <AntdTable
      dataSource={datas}
      columns={convertedColumns as any}
      {...props}
    />
  );
};

export default Table;

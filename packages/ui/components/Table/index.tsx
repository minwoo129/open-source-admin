import React, { ComponentProps } from 'react';
import { Table as AntdTable } from 'antd';
import useTable from './hooks/useTable';
import { TableObject, TableProps } from './types';

const Table = <T extends TableObject>({
  datas,
  columns,
  filters,
  ...props
}: TableProps<T>) => {
  const { convertedColumns } = useTable<T>({ columns, datas, filters });
  return (
    <AntdTable<T>
      dataSource={datas}
      columns={convertedColumns as any}
      {...props}
    />
  );
};

export default Table;

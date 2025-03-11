import React from 'react';
import { Table as AntdTable } from 'antd';
import useTable from './hooks/useTable';
import { TableObject, TableProps } from './types';

const Table = <T extends TableObject>({
  datas,
  columns,
  ...props
}: TableProps<T>) => {
  const { convertedColumns } = useTable<T>({ columns, datas });
  return (
    <AntdTable<T> dataSource={datas} columns={convertedColumns} {...props} />
  );
};

export default Table;

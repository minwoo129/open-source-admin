import React from 'react';
import { Table as AntdTable } from 'antd';
import useTable from './hooks/useTable';
import { TableObject, TableProps } from './types';

const Table = <T extends TableObject>({
  datas,
  columns,
  onRowItemClick,
  onRowItemDoubleClick,
  onRowItemContextMenu,
  onRowItemMouseEnter,
  onRowItemMouseLeave,
  ...props
}: TableProps<T>) => {
  const { convertedColumns } = useTable<T>({ columns, datas });
  return (
    <AntdTable<T>
      dataSource={datas}
      columns={convertedColumns}
      onRow={(record, rowIndex) => {
        return {
          onClick: (e) => {
            if (!onRowItemClick) return;
            onRowItemClick(e, record, rowIndex);
          },
          onDoubleClick: (e) => {
            if (!onRowItemDoubleClick) return;
            onRowItemDoubleClick(e, record, rowIndex);
          },
          onContextMenu: (e) => {
            if (!onRowItemContextMenu) return;
            onRowItemContextMenu(e, record, rowIndex);
          },
          onMouseEnter: (e) => {
            if (!onRowItemMouseEnter) return;
            onRowItemMouseEnter(e, record, rowIndex);
          },
          onMouseLeave: (e) => {
            if (!onRowItemMouseLeave) return;
            onRowItemMouseLeave(e, record, rowIndex);
          },
        };
      }}
      {...props}
    />
  );
};

export default Table;

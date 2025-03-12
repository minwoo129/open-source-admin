import React from 'react';
import { Table as AntdTable, Layout } from 'antd';
import useTable from './hooks/useTable';
import { TableObject, TableProps } from './types';
import '@ant-design/v5-patch-for-react-19';

const { Content } = Layout;

const Table = <T extends TableObject>({
  datas,
  columns,
  header,
  onRowItemClick,
  onRowItemDoubleClick,
  onRowItemContextMenu,
  onRowItemMouseEnter,
  onRowItemMouseLeave,
  ...props
}: TableProps<T>) => {
  const { convertedColumns } = useTable<T>({ columns, datas });
  return (
    <Content style={{ backgroundColor: 'white' }}>
      {header}
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
    </Content>
  );
};

export default Table;

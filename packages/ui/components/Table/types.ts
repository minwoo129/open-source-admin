import { ComponentProps } from 'react';
import { Table as AntdTable } from 'antd';
import { ColumnProps } from 'antd/es/table';

export interface TableProps<T extends {}>
  extends Omit<ComponentProps<typeof AntdTable>, 'columns' | 'dataSource'> {
  datas: T[];
  columns: ColumnStructure<T>;
  filters?: FilterStructure<T>;
}

export type ArrayElement<T> = T extends (infer U)[] ? U : never;

export type ColumnItemType = ArrayElement<
  ComponentProps<typeof AntdTable>['columns']
>;

interface ColumnStructureItemType<T extends {}>
  extends Omit<ColumnProps<T>, 'dataIndex'> {}

type ColumnStructure<T extends {}> = {
  [key in keyof T]?: ColumnStructureItemType<T>;
};

type FilterStructure<T extends {}> = {
  [key in keyof T]?: {
    filterMode: 'menu' | 'tree';
    onFilter: (value: boolean, record: T) => boolean;
    filterSearch: boolean;
  };
};

export type UseTableArgs<T extends {}> = {
  datas: T[];
  columns: ColumnStructure<T>;
  filters?: FilterStructure<T>;
};

export type ColumnSetValueType<T extends {}> = {
  [key in keyof T]?: T[key][];
};

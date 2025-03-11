import { ComponentProps } from 'react';
import { Table as AntdTable } from 'antd';
import { ColumnProps } from 'antd/es/table';

export type TableObject = Record<string | number | symbol, any>;

export interface TableProps<T extends TableObject>
  extends Omit<ComponentProps<typeof AntdTable<T>>, 'columns' | 'dataSource'> {
  datas: T[];
  columns: ColumnStructure<T>;
}

export type ArrayElement<T> = T extends (infer U)[] ? U : never;

export type ColumnItemType = ArrayElement<
  ComponentProps<typeof AntdTable>['columns']
>;

interface ColumnStructureItemType<T extends TableObject>
  extends Omit<ColumnProps<T>, 'dataIndex'> {}

type ColumnStructure<T extends TableObject> = {
  [key in keyof T]?: ColumnStructureItemType<T>;
};

export type UseTableArgs<T extends TableObject> = {
  datas: T[];
  columns: ColumnStructure<T>;
};

export type ColumnSetValueType<T extends TableObject> = {
  [key in keyof T]?: T[key][];
};

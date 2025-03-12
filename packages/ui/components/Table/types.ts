import { ComponentProps } from 'react';
import { Table as AntdTable } from 'antd';
import { ColumnProps } from 'antd/es/table';

export type TableObject = Record<string | number | symbol, any>;

export interface TableProps<T extends TableObject>
  extends Omit<
      ComponentProps<typeof AntdTable<T>>,
      'columns' | 'dataSource' | 'onRow'
    >,
    TableRowEvents<T> {
  /**
   * 테이블 데이터
   */
  datas: T[];
  /**
   * 테이블 컬럼
   */
  columns: ColumnStructure<T>;
}

export interface TableRowEvents<T extends TableObject> {
  /**
   * 행(데이터) 클릭 이벤트
   */
  onRowItemClick?: (
    e: React.MouseEvent<any, MouseEvent>,
    record: T,
    rowIndex: number | undefined,
  ) => void;
  /**
   * 행(데이터) 더블클릭 이벤트
   */
  onRowItemDoubleClick?: (
    e: React.MouseEvent<any, MouseEvent>,
    record: T,
    rowIndex: number | undefined,
  ) => void;
  /**
   * 행(데이터) 컨텍스트 메뉴(마우스 우클릭 시 발생) 이벤트
   */
  onRowItemContextMenu?: (
    e: React.MouseEvent<any, MouseEvent>,
    record: T,
    rowIndex: number | undefined,
  ) => void;
  /**
   * 행(데이터) 마우스 호버링 이벤트
   * - 마우스가 해당 행에 진입했을 때 발생
   */
  onRowItemMouseEnter?: (
    e: React.MouseEvent<any, MouseEvent>,
    record: T,
    rowIndex: number | undefined,
  ) => void;
  /**
   * 행(데이터) 마우스 호버링 이벤트
   * - 마우스가 해당 행에서 빠져나갔을 때 발생
   */
  onRowItemMouseLeave?: (
    e: React.MouseEvent<any, MouseEvent>,
    record: T,
    rowIndex: number | undefined,
  ) => void;
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
  /**
   * 테이블 데이터
   */
  datas: T[];
  /**
   * 테이블 컬럼
   */
  columns: ColumnStructure<T>;
};

export type ColumnSetValueType<T extends TableObject> = {
  [key in keyof T]?: T[key][];
};

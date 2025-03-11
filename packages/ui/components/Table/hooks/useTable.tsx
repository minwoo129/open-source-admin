import { ColumnProps, ColumnsType } from 'antd/es/table';
import { TableObject, UseTableArgs } from '../types';
import { useMemo } from 'react';

const useTable = <T extends TableObject>({
  columns,
  datas,
}: UseTableArgs<T>) => {
  const convertedColumns = useMemo(() => {
    let newColumns: ColumnsType<T> = [];

    for (const key in columns) {
      const data = columns[key];
      if (!data) continue;

      let newData: ColumnProps<T> = { ...data, dataIndex: key };

      newColumns.push(newData);
    }

    return newColumns;
  }, [columns, datas]);

  return { convertedColumns };
};

export default useTable;

import { ColumnProps, ColumnsType } from 'antd/es/table';
import { UseTableArgs } from '../types';
import { useMemo } from 'react';

const useTable = <T extends {}>({
  columns,
  datas,
  filters,
}: UseTableArgs<T>) => {
  const convertedColumns = useMemo(() => {
    let newColumns: ColumnsType<T> = [];

    for (const key in columns) {
      const data = columns[key];
      if (!data) continue;

      let newData: ColumnProps<T> = { ...data, dataIndex: key };

      if (filters) {
        const filter = filters[key];
        if (filter) {
          const setDatas = Array.from(
            new Set(datas.map((data) => String(data[key]))),
          );

          newData = {
            ...newData,
            ...filter,
            filters: setDatas.map((data) => ({ text: data, value: data })),
            onFilter: (value: boolean | React.Key, record: T) =>
              filter.onFilter(value as boolean, record),
          };
        }
      }
      //   newColumns.push({
      //     ...data,
      //     dataIndex: key,
      //   });

      newColumns.push(newData);
    }

    return newColumns;
  }, [columns, filters, datas]);

  return { convertedColumns };
};

export default useTable;

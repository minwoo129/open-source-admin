import React from 'react';
import { List as AntdList } from 'antd';
import type { ListItemProps, ListProps } from './types';

const List = ({ ...props }: ListProps) => {
  return <AntdList {...props} />;
};

List.Item = ({ ...props }: ListItemProps) => {
  return <AntdList.Item {...props} />;
};

List.ItemMeta = AntdList.Item.Meta;

export default List;

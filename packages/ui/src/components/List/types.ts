import { ComponentProps } from 'react';
import { List as AntdList } from 'antd';

export interface ListProps extends ComponentProps<typeof AntdList> {}

export interface ListItemProps extends ComponentProps<typeof AntdList.Item> {}

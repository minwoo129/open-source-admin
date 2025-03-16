import { ComponentProps } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

export interface LayoutCardProps extends ComponentProps<typeof Content> {}

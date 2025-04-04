import { ComponentProps } from 'react';
import { Button as AntdButton } from 'antd';

export interface ButtonProps extends ComponentProps<typeof AntdButton> {
  /** 버튼 클릭 시 발생 이벤트 */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** 버튼 색상 */
  color?:
    | 'default'
    | 'primary'
    | 'danger'
    | 'blue'
    | 'purple'
    | 'cyan'
    | 'green'
    | 'magenta'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'volcano'
    | 'geekblue'
    | 'lime'
    | 'gold';
  children?: React.ReactNode;
}

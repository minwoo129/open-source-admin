import { Skeleton as AntdSkeleton } from 'antd';
import { ComponentProps } from 'react';

export interface SkeletonProps extends ComponentProps<typeof AntdSkeleton> {}

export interface SkeletonButtonProps
  extends ComponentProps<typeof AntdSkeleton.Button> {}

export interface SkeletonImageProps
  extends ComponentProps<typeof AntdSkeleton.Image> {}

export interface SkeletonAvatarProps
  extends ComponentProps<typeof AntdSkeleton.Avatar> {}

export interface SkeletonInputProps
  extends ComponentProps<typeof AntdSkeleton.Input> {}

export interface SkeletonNodeProps
  extends ComponentProps<typeof AntdSkeleton.Node> {}

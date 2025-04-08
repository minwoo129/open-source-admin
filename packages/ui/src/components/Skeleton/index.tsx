import React from 'react';
import { Skeleton as AntdSkeleton } from 'antd';
import {
  SkeletonAvatarProps,
  SkeletonButtonProps,
  SkeletonImageProps,
  SkeletonInputProps,
  SkeletonNodeProps,
  SkeletonProps,
} from './types';

const Skeleton = ({ ...props }: SkeletonProps) => {
  return <AntdSkeleton {...props} />;
};

Skeleton.Button = ({ ...props }: SkeletonButtonProps) => {
  return <AntdSkeleton.Button {...props} />;
};

Skeleton.Image = ({ ...props }: SkeletonImageProps) => {
  return <AntdSkeleton.Image {...props} />;
};

Skeleton.Avatar = ({ ...props }: SkeletonAvatarProps) => {
  return <AntdSkeleton.Avatar {...props} />;
};

Skeleton.Input = ({ ...props }: SkeletonInputProps) => {
  return <AntdSkeleton.Input {...props} />;
};

Skeleton.Node = ({ ...props }: SkeletonNodeProps) => {
  return <AntdSkeleton.Node {...props} />;
};

export default Skeleton;

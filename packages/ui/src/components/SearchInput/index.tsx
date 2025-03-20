import React from 'react';
import { Input } from 'antd';
import type { SearchInputProps } from './types';

const SearchInput = ({ ...props }: SearchInputProps) => {
  return <Input.Search {...props} />;
};

export default SearchInput;

import React from 'react';
import { Input } from 'antd';
import { SearchInputProps } from './types';

const SearchInput = ({ ...props }: SearchInputProps) => {
  return <Input.Search {...props} />;
};

export default SearchInput;

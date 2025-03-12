import React from 'react';
import { Layout } from 'antd';
import { TableHeaderProps } from './types';
const { Content } = Layout;

const TableHeader = ({ title = '', right }: TableHeaderProps) => {
  return (
    <Content
      style={{
        display: 'flex',
        flex: 1,
        height: 'fit-content',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: '16px',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <h2 style={{ margin: 0 }}>{`title: ${title}`}</h2>
      <Content
        style={{
          display: 'flex',
          flex: 1,
          height: '40px',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {right}
      </Content>
    </Content>
  );
};

export default React.memo(TableHeader);

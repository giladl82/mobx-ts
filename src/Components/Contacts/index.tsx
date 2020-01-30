import React, { useEffect } from 'react';
import { Table, message, Avatar } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../Store';
import Contact from '../../Models/Contact';

import './Contacts.css'

const Contacts = () => {
  const columns = [
    {
      title: '',
      width: 100,
      key: 'avatar',
      render: (data: Contact, record: any, index: number) => (
        <Avatar src={data.avatar} />
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Address',
      dataIndex: 'fullAddress',
      key: 'fullAddress'
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Action',
      key: 'operation',
      render: (data: Contact, record: any, index: number) => (
        <a
          onClick={event => {
            message.info(
              <div className="publish-message">
                <h2>You've selected:</h2>
                <div><strong>{data.name}</strong></div>
                <div>from: {data.fullAddress}</div>
                <div>tel: {data.phone}</div>
              </div>
            );
          }}
        >
          Publish
        </a>
      )
    }
  ];
  const store = useStore();

  useEffect(() => {
    store.contacts.loadContacts();
  }, []);

  return <Table rowKey="id" dataSource={store.contacts.list} columns={columns} scroll={{ y: 240 }} />;
};

export default observer(Contacts);

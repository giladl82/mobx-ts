import React, { useEffect } from 'react';
import { Table } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../Store';

const columns = [
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
  }
];

const Contacts = () => {
  const store = useStore();

  useEffect(() => {
    store.contacts.loadContacts();
  }, []);

  useEffect(() => {
    if (store.contacts.list.length) {
      console.log(store.contacts.list[0]);
    }
  });

  return <Table rowKey="id" dataSource={store.contacts.list} columns={columns} />;
};

export default observer(Contacts);

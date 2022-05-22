import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as userAction from '../../features/users/actions';
import ListView from '../../components/ListView';
import { getUsersSelector } from '../../features/users/selectors';
import styles from './styles';

export default function Users() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(getUsersSelector);
  useEffect(() => {
    dispatch(userAction.getUsers());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ListView
        data={data}
        onEndReached={() => dispatch(userAction.getUsers())}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
}

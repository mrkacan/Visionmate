import React from 'react';
import { View } from 'react-native';

type ListViewProps = {
  height: number
}

const Spacer: React.FC<ListViewProps> = ({ height }) => (
  <View style={{ height }} />
);

export default Spacer;

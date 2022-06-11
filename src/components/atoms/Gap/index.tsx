import {View} from 'react-native';
import React from 'react';

interface GapProps {
  height: number;
  width: number;
}

const Gap = (props: GapProps) => {
  return <View style={{height: props.height, width: props.width}}></View>;
};

export default Gap;

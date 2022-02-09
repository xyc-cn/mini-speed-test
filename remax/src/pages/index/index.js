import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';
export default () => {
  const [text, setText] = React.useState('jjj5');


  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <View className={styles.text}>
          <Text onClick={()=> {global.tttt = Date.now(); setText('ssss')}}>{text}</Text>{' '}
        </View>
      </View>
    </View>
  );
};

import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, consttiply } from 'react-native-xiaogang-ui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [backList, setBackList] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    consttiply(5, 7).then(setBackList);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>backList: {backList}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

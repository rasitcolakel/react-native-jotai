import { Text, View } from "react-native";

import Counter from "../../components/counter";

export default function TabOneScreen() {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Counter</Text>
      <View className={styles.separator} />
      <Counter />
    </View>
  );
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};

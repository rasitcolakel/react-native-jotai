import { atom, useAtom } from "jotai";
import React from "react";
import { Button, Text, View } from "react-native";

const countAtom = atom(0);

export default function Counter() {
  const [count, setCount] = useAtom(countAtom);

  const increment = () => setCount((c) => c + 1);

  const decrement = () => setCount((c) => c - 1);

  const reset = () => setCount(0);

  return (
    <View className="flex items-center">
      <Text className="text-xl pb-2">{count}</Text>
      <View className="flex items-center flex-row pb-2">
        <Button title="Increment" onPress={increment} color="green" />
        <Button title="Decrement" onPress={decrement} color="red" />
      </View>
      <Button title="Reset" onPress={reset} />
    </View>
  );
}

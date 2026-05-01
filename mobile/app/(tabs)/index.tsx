import { ScrollView, Text, View } from 'react-native';

export default function ChatsTab() {
  return (
    <ScrollView
      className="bg-surface flex-1"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text className="text-white">Chats Tab</Text>
    </ScrollView>
  );
}

import { useAuth } from '@clerk/expo';
import { Pressable, ScrollView, Text } from 'react-native';

export default function ProfileTab() {
  const { signOut } = useAuth();

  return (
    <ScrollView
      className="bg-surface"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text className="text-white">Profile Tab</Text>
      <Pressable onPress={() => signOut()} className="mt-4 bg-white px-4 py-2">
        <Text>signout</Text>
      </Pressable>
    </ScrollView>
  );
}

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#FFC0CB',
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          },
          headerTitleAlign: 'center'
        }}
        name="index"
      />
    </Stack>
  );
}

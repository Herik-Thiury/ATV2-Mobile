import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menu Principal", headerTitleAlign: "center" }} />
      <Stack.Screen name="appMedico" options={{ headerShown: false }} />
      <Stack.Screen name="appViagem" options={{ headerShown: false }} />
      <Stack.Screen name="appMensagens" options={{ headerShown: false }} />
    </Stack>
  );
}
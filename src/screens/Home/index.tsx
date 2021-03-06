import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { styles } from "./styles";
import { SignInBox } from "../../components/SignInBox";
import { SendMessageForm } from "../../components/SendMessageForm";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      {user ? <SendMessageForm /> : <SignInBox />}
    </View>
  );
}

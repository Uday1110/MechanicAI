import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { CustomButton, FormField } from "../../components";
import { getCurrentUser } from "../../lib/appwrite"; // Import Appwrite helper function

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [userId, setUserId] = useState(null); // User ID state
  const scrollViewRef = useRef();

  // Fetch userId from Appwrite when the component mounts
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user = await getCurrentUser(); // Fetch the current user
        setUserId(user?.$id || null); // Save the userId or null if not logged in
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserId();
  }, []);

  const sendMessage = async () => {
    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    try {
      setLoading(true);
      let res;
      if (!sessionId) {
        // First message: use `/new` endpoint
        res = await axios.post("http://192.168.1.5:5000/api/new", {
          message,
          userId, // Use dynamic userId
        });
        setSessionId(res.data.sessionId); // Save the session ID
      } else {
        // Subsequent messages: use `/message` endpoint
        res = await axios.post("http://192.168.1.5:5000/api/message", {
          message,
          sessionId,
          userId, // Use dynamic userId
        });
      }

      setResponse((prevResponses) => [
        ...prevResponses,
        { type: "user", text: message },
        { type: "bot", text: res.data.response },
      ]);
      setMessage(""); // Clear input
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [response]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="px-4 my-6"
          contentContainerStyle={{ paddingBottom: 20 }}
          ref={scrollViewRef}
        >
          <Text className="text-2xl text-white font-psemibold">Chatbot</Text>
          <View className="flex-1 pt-4">
            {response.map((msg, index) => (
              <View
                key={index}
                className={`mb-2 ${
                  msg.type === "user" ? "items-end" : "items-start"
                } flex`}
                style={{
                  maxWidth: "100%",
                  alignSelf: msg.type === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Text
                  className={`p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-blue-600 text-white text-lg"
                      : "text-white text-lg"
                  }`}
                >
                  {msg.type === "user"
                    ? `You: ${msg.text}`
                    : `Bot: ${msg.text}`}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View className="px-3">
          <FormField
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message"
            otherStyles="mt-0"
          />
          <CustomButton
            title={loading ? "Sending..." : "Send"}
            handlePress={sendMessage}
            containerStyles="mt-7"
            disabled={loading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chatbot;

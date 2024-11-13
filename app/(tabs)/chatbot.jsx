import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { CustomButton, FormField } from "../../components";

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const scrollViewRef = useRef(); // Create a ref for the ScrollView

  const sendMessage = async () => {
    try {
      setLoading(true); // Start loading
      const res = await axios.post('https://2425-35-240-244-70.ngrok-free.app/chat', {
        prompt: message // Use 'prompt' instead of 'message' to match your backend
      });
      setResponse(prevResponses => [
        ...prevResponses, 
        { type: 'user', text: message }, 
        { type: 'bot', text: res.data.response } // Change to match the structure of your response
      ]);
      setMessage(''); // Clear the input after sending the message
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Automatically scroll to the bottom when response updates
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
          ref={scrollViewRef} // Attach the ref here
        >
          <Text className="text-2xl text-white font-psemibold">Chatbot</Text>
          <View className="flex-1 pt-4">
            {response.map((msg, index) => (
              <View 
                key={index} 
                className={`mb-2 ${msg.type === 'user' ? 'items-end' : 'items-start'} flex`}
                style={{ maxWidth: '100%', alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start' }}
              >
                <Text 
                  className={`p-3 rounded-lg ${msg.type === 'user' ? 'bg-blue-600 text-white text-lg' : 'text-white text-lg'}`}
                >
                  {msg.type === 'user' ? `You: ${msg.text}` : `Bot: ${msg.text}`}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View className="px-4">
          <FormField
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message"
            otherStyles="mt-0"
          />
          <CustomButton
            title={loading ? "Sending..." : "Send"} // Change button text based on loading state
            handlePress={sendMessage}
            containerStyles="mt-7"
            disabled={loading} // Disable button while loading
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chatbot;

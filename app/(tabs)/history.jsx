import React, { useEffect, useState } from "react";
import { CustomButton, FormField } from "../../components";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Platform,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCurrentUser } from "../../lib/appwrite"; // Function to get current user ID

const History = () => {
  const [sessions, setSessions] = useState([]); // Chat sessions
  const [selectedSession, setSelectedSession] = useState(null); // Selected session details
  const [conversation, setConversation] = useState(""); // Conversation data
  const [loading, setLoading] = useState(false); // Loading state
  const [userId, setUserId] = useState(null); // User ID state
  const [offset, setOffset] = useState(0);
  // Fetch userId from Appwrite when the component mounts
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user = await getCurrentUser(); // Fetch the current user
        setUserId(user?.$id || null); // Save the userId or null if not logged in
        console.log("User ID fetched:", user?.$id); // Debugging log
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    // Ensure userId is available before making the API request
    if (userId && offset === 0) {
      // Only fetch if userId is available and offset is 0
      const fetchChatSessions = async () => {
        const requestUrl = `http://192.168.1.5:5000/api/chats`;
        console.log(
          "Making request to fetch chat sessions with userId:",
          userId
        );

        try {
          setLoading(true);
          const response = await axios.post(requestUrl, { userId, offset });
          setOffset(response.data.offset); // Update offset only if needed
          console.log("Chat sessions fetched:", response.data);
          setSessions(response.data.chatList); // Set chat sessions
        } catch (error) {
          console.error("Error fetching chat sessions:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchChatSessions();
    } else if (!userId) {
      console.log("User ID is not available. Skipping API request.");
    }
  }, [userId, offset]); // Fetch chat sessions only when userId or offset changes

  // Fetch chat details when a session is selected
  const fetchChatDetails = async (sessionId) => {
    if (!userId) {
      console.log("User ID is not available for fetching chat details.");
      return; // Prevent making the request if userId is not available
    }

    console.log(
      `Fetching chat details for sessionId: ${sessionId} with userId: ${userId}`
    ); // Debugging log
    try {
      setLoading(true);
      const response = await axios.post(`http://192.168.1.5:5000/api/history`, {
        userId: userId,
        sessionId: sessionId,
      });
      console.log("Chat details fetched:", response.data); // Debugging log
      setConversation(response.data.conversation);
      setSelectedSession(response.data); // Set the selected session details
    } catch (error) {
      console.error("Error fetching chat details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Chat Sessions List */}
      <Text className="text-2xl text-white font-psemibold mb-4 p-5">
        Chat History
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={sessions}
          keyExtractor={(item) => item.sessionId}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="p-4 border-b"
              onPress={() => fetchChatDetails(item.sessionId)} // Fetch details of selected chat
            >
              <Text className="text-lg text-white">{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Chat Details View */}
      {selectedSession && !loading && (
        <ScrollView className="flex-1 p-3">
          {/* <TouchableOpacity
              onPress={() => setSelectedSession(null)} // Go back to the list view
              className="mb-4 p-2 bg-blue-500 rounded"
            >
              <Text className="text-white text-sm">Back to History</Text>
            </TouchableOpacity> */}
          <CustomButton
            title={"Back to history"}
            handlePress={() => setSelectedSession(null)}
            containerStyles="mt-7"
          />

          {/* Display the title of the selected session */}
          <Text className="text-2xl text-white font-bold mb-4">
            {selectedSession?.title || "Untitled Session"}
          </Text>

          {/* Render each message in the conversation */}
          {conversation && Array.isArray(conversation) ? (
            conversation.map((msg) => (
              <View key={msg._id} className="mb-4">
                <Text className="font-semibold text-blue-500">
                  {msg.sender}:
                </Text>
                <Text className="text-white">{msg.message}</Text>
                <Text className="text-xs text-yellow-200">
                  {new Date(msg.timestamp).toLocaleString()}
                </Text>
              </View>
            ))
          ) : (
            <Text className="text-red-700">No conversation available</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default History;

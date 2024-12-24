// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
//   ActivityIndicator,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { CustomButton } from "../../components";
// import axios from "axios";
// import { getCurrentUser } from "../../lib/appwrite";

// const History = () => {
//   const [sessions, setSessions] = useState([]); // Chat sessions
//   const [selectedSession, setSelectedSession] = useState(null); // Selected session details
//   const [conversation, setConversation] = useState(""); // Conversation data
//   const [loading, setLoading] = useState(false); // Loading state
//   const [userId, setUserId] = useState(null); // User ID state

//   // Fetch userId from Appwrite when the component mounts
//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const user = await getCurrentUser(); // Fetch the current user
//         setUserId(user?.$id || null); // Save the userId or null if not logged in
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUserId();
//   }, []);

//   // Fetch chat sessions for the user
//   useEffect(() => {
//     if (userId) {
//       const fetchChatSessions = async () => {
//         try {
//           setLoading(true);
//           const response = await axios.post(
//             `http://192.168.1.5:5000/api/chats`,
//             { userId }
//           );
//           setSessions(response.data.chatList || []);
//         } catch (error) {
//           console.error("Error fetching chat sessions:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchChatSessions();
//     }
//   }, [userId]);

//   // Fetch chat details when a session is selected
//   const fetchChatDetails = async (sessionId) => {
//     if (!userId) return;

//     try {
//       setLoading(true);
//       const response = await axios.post(`http://192.168.1.5:5000/api/history`, {
//         userId,
//         sessionId,
//       });
//       setConversation(response.data.conversation || []);
//       setSelectedSession(response.data); // Set the selected session details
//       console.log("Selected Session:", selectedSession);
//     } catch (error) {
//       console.error("Error fetching chat details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Conditional rendering for chat list or chat details
//   if (selectedSession) {
//     return (
//       <SafeAreaView className="bg-primary h-full">
//         <CustomButton
//           title="Back to History"
//           handlePress={() => setSelectedSession(null)} // Return to the chat list
//           containerStyles="mt-7"
//         />
//         <ScrollView className="flex-1 p-3">
//           <Text className="text-2xl text-white font-bold mb-4">
//             {selectedSession?.title || "Untitled Session"}
//           </Text>

//           {/* Render each message in the conversation */}
//           {conversation && Array.isArray(conversation) ? (
//             conversation.map((msg) => (
//               <View
//                 key={msg._id}
//                 className={`mb-4 flex ${
//                   msg.sender === "user" ? "items-end" : "items-start"
//                 }`}
//                 style={{
//                   alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
//                 }}
//               >
//                 <Text
//                   className={`p-3 rounded-lg ${
//                     msg.sender === "user"
//                       ? "bg-blue-600 text-white text-lg"
//                       : "text-white text-lg"
//                   }`}
//                 >
//                   {msg.message}
//                 </Text>
//                 <Text className="text-xs text-yellow-200 mt-1">
//                   {new Date(msg.timestamp).toLocaleString()}
//                 </Text>
//               </View>
//             ))
//           ) : (
//             <Text className="text-red-700">No conversation available</Text>
//           )}
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }

//   // Render chat list if no session is selected
//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <Text className="text-2xl text-white font-psemibold mb-4 p-5">
//         Chat History
//       </Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <FlatList
//           data={sessions}
//           keyExtractor={(item) => item.sessionId}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               className="p-4 border-b"
//               onPress={() => fetchChatDetails(item.sessionId)} // Fetch details of selected chat
//             >
//               <Text className="text-lg text-white">{item.title}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// export default History;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components";
import axios from "axios";
import { getCurrentUser } from "../../lib/appwrite";

const History = () => {
  const [sessions, setSessions] = useState([]); // Chat sessions
  const [selectedSession, setSelectedSession] = useState(null); // Selected session details
  const [conversation, setConversation] = useState(""); // Conversation data
  const [loading, setLoading] = useState(false); // Loading state
  const [userId, setUserId] = useState(null); // User ID state

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

  // Fetch chat sessions for the user
  useEffect(() => {
    if (userId) {
      const fetchChatSessions = async () => {
        try {
          setLoading(true);
          const response = await axios.post(
            `http://192.168.1.5:5000/api/chats`,
            { userId }
          );
          setSessions(response.data.chatList || []);
        } catch (error) {
          console.error("Error fetching chat sessions:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchChatSessions();
    }
  }, [userId]);

  // Fetch chat details when a session is selected
  const fetchChatDetails = async (sessionId, title) => {
    if (!userId) return;

    try {
      setLoading(true);
      const response = await axios.post(`http://192.168.1.5:5000/api/history`, {
        userId,
        sessionId,
      });
      setConversation(response.data.conversation || []);
      setSelectedSession({
        ...response.data, // Include all session details
        title, // Store the passed title here
      });
      // console.log("Selected Session:", selectedSession);
    } catch (error) {
      console.error("Error fetching chat details:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to log the selected session when it changes
  useEffect(() => {
    if (selectedSession) {
      console.log("Selected Session:", selectedSession.title); // This will log the updated selected session
    }
  }, [selectedSession]);

  // Conditional rendering for chat list or chat details
  if (selectedSession) {
    return (
      <SafeAreaView className="bg-primary h-full">
        <View className="flex-row justify-between items-center mb-5 p-2">
          {/* Title on the left */}
          <Text className="text-2xl text-white font-bold">
            {selectedSession?.title || "Untitled Session"}
          </Text>

          {/* Back to History button on the right */}
          <TouchableOpacity
            className="bg-secondary px-2 py-2 rounded-xl"
            onPress={() => setSelectedSession(null)} // Reset selected session to null and go back to the list
          >
            <Text className="text-primary font-psemibold text-lg">Back</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 p-3">
          {/* <Text className="text-2xl text-white font-bold mb-4">
            {selectedSession?.title || "Untitled Session"}
          </Text> */}

          {/* Render each message in the conversation */}
          {conversation && Array.isArray(conversation) ? (
            conversation.map((msg) => (
              <View
                key={msg._id}
                className={`mb-4 flex ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Text
                  className={`p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white text-lg"
                      : "text-white text-lg"
                  }`}
                >
                  {msg.message}
                </Text>
                <Text className="text-xs text-yellow-200 mt-1">
                  {new Date(msg.timestamp).toLocaleString()}
                </Text>
              </View>
            ))
          ) : (
            <Text className="text-red-700">No conversation available</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Render chat list if no session is selected
  return (
    <SafeAreaView className="bg-primary h-full">
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
              onPress={() => fetchChatDetails(item.sessionId, item.title)} // Fetch details of selected chat
            >
              <Text className="text-lg text-white">{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default History;

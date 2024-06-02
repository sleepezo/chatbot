import { Message } from "@/lib/validators/message";
import { nanoid } from "nanoid";
import { ReactNode, createContext, useState } from "react"; //1.38

//in <{define type}>
export const MessageContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean; //update text one by one (typing)
  addMessages: (message: Message) => void;
  removeMessage: (id: string) => void; //error handling
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void; //update prev text from chunks to one string
  setIsMessageUpdating: (isUpdating: boolean) => void;
}>({
  messages: [],
  isMessageUpdating: false,
  addMessages: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: nanoid(),
      text: "Hello, how may I help you today?", //first message
      isUserMessage: false, //make it a bot only message
    },
  ]);

  //access to message, and pass prev and new
  const addMessages = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  //make new message to be completly new
  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  //
  const updateMessage = (
    //take
    id: string,
    updateFn: (prevText: string) => string
    //push answer of chunks and make it into string
  ) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.text) };
        }

        return message;
      })
    );
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        addMessages,
        removeMessage,
        updateMessage,
        isMessageUpdating,
        setIsMessageUpdating,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

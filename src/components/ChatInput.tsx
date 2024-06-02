"use client";

import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useContext, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";
import { MessageContext } from "@/context/messages";
import { CornerDownLeft, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [Input, setInput] = useState<string>("");
  const {
    messages,
    addMessages,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessageContext);

  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [message] }),
      });

      if (!response.ok) {
        throw new Error();
      }

      return response.body;
    },
    onMutate(message) {
      addMessages(message);
    },
    onSuccess: async (stream) => {
      //to display text from GPT to user
      if (!stream) throw new Error("No Stream Found"); //if no stream,

      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      addMessages(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
        //console.log(chunkValue);
      }

      //new message need empty bracket
      setIsMessageUpdating(false);
      setInput("");
      //console.log("success");

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 10);
    },

    //error handling
    onError(_, message) {
      console.log("Error got called");
      toast.error("Something went wrong. Please try Later");
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });

  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className=" relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none ">
        {/* ni box for message*/}
        <TextareaAutosize
          ref={textareaRef}
          rows={2}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message = {
                id: nanoid(),
                isUserMessage: true,
                text: Input,
              };

              sendMessage(message);
            }
          }}
          maxRows={4}
          disabled={isPending}
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          placeholder="Write a message..."
          className=" peer-required: disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-red-500 py-1.5 text-gray-950 focus:ring-0 text-sm sm:leading-6"
        />

        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          {/* the enter button*/}
          <kbd className="inline-flex items-center rounded border bg-green-600 border-gray-200 px-1 font-sans text-xs text-gray-400">
            {isPending ? (
              <Loader2 className="w-3 h-3 animate-spin" /> //spin
            ) : (
              <CornerDownLeft className="w-3 h-3" /> //enter symbol cornerdownleft
            )}
          </kbd>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
        />
      </div>
    </div>
  );
};

export default ChatInput;

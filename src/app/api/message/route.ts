import { MessageArraySchema } from "@/lib/validators/message";
import {
  ChatGPTMessage,
  OpenAIStream,
  OpenAIStreamPayload,
} from "@/lib/openai-stream";
import { edubotPrompt } from "@/app/helpers/constants/edubot-prompt";

export async function POST(req: Request) {
  //console.log('endpoint works') error 500 , 56
  const { messages } = await req.json();

  const parsedMessages = MessageArraySchema.parse(messages);

  //error test 2.30
  //throw new Error("Error");

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
    role: message.isUserMessage ? "user" : "system",
    content: message.text,
  }));

  outboundMessages.unshift({
    role: "system",
    content: edubotPrompt,
  });

  const payload: OpenAIStreamPayload = {
    //open ai
    model: "gpt-3.5-turbo",
    messages: outboundMessages,
    temperature: 0.4, //possibilies of imagination
    top_p: 1,
    frequency_penalty: 0, //use less frequence word
    presence_penalty: 0,
    max_tokens: 150, //reply words
    stream: true, //readable screen
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}

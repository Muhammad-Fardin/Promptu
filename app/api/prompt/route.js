import Prompt from "@models/prompt";
import { database } from "@utils/database";

export const GET = async(request) => {
     try {
          await database()
          const prompts = await Prompt.find({}).populate('creator')
          return new Response(JSON.stringify(prompts), {status: 200})
     } catch (error) {
          return new Response("Failed to fetch all prompts", {status: 500})
     }
}
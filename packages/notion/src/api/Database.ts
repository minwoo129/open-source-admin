import { Client } from '@notionhq/client';
import { convertNotionDBGetResponse } from '../helpers/Database/get';
export default function Database(key: string) {
  const APIKey = key;

  const notion = new Client({
    auth: APIKey,
    baseUrl: 'http://localhost:5173/api/notion',
  });

  return {
    get: async <T extends Object>(
      args: Parameters<typeof notion.databases.query>[0],
    ) => {
      try {
        const response = await notion.databases.query(args);
        console.log('Notion original response: ', response);

        return convertNotionDBGetResponse<T>(response);
      } catch (e) {
        throw e;
      }
    },
  };
}

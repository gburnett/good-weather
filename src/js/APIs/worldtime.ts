import { WorldtimeResponse } from 'types/types';

export default async function (timezone: string): Promise<WorldtimeResponse> {
  const url = `https://worldtimeapi.org/api/timezone/${timezone}`;

  try {
    const request: Response = await fetch(url);
    const response: WorldtimeResponse = await request.json();
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw error;
  }
}

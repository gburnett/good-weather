export default async function (timezone: string): Promise<any> {
  const url = `https://worldtimeapi.org/api/timezone/${timezone}`;

  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch {
    throw new Error("Can't get the current time... Please try again later.");
  }
}

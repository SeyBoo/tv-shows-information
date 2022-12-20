const headers = new Headers();
headers.append("X-RapidAPI-Key", process.env.NEXT_PUBLIC_API_KEY || "");
headers.append("X-RapidAPI-Host", process.env.NEXT_PUBLIC_API_HOST || "");

export const getFromApi = async (
  url: string,
  params?: Record<string, string>
) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: "GET",
    headers,
  });

  if (response.status === 401) {
    throw new Error();
  }

  if (response.ok) {
    return response.json();
  }
};

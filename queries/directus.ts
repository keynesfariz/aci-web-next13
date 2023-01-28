export const BASE_URL = `${process.env.ACI_API_URL}/items`;

export const DEFAULT_HEADERS = {
  Authorization: `Bearer ${process.env.ACI_API_TOKEN}`,
};

const directus = async <T>(collection: string, query: any = undefined) => {
  const response = await fetch(`${BASE_URL}/${collection}`, {
    headers: DEFAULT_HEADERS,
    body: query,
  });

  const { data } = await response.json();

  return data as T;
};

export default directus;

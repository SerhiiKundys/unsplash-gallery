const CLIENT_ID = "YOUR-TOKEN-b123cb312ced1341f13ed213c";

export const fetchNewData = async (newPage) => {
  const url = `https://api.unsplash.com/photos/?page=${newPage}&client_id=${CLIENT_ID}`;
  const response = await fetch(url, { method: "get" });
  return response;
};

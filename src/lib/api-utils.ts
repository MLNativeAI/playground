export const getFlanUrl = (apiUrl: string, userApiToken?: string): string => {
  const token = userApiToken ? userApiToken : '********';
  return `curl ${apiUrl}/predict/flan-t5-large -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer ${token}'  -d '{"input" : "How many lightbulbs are there in chicago?"}'`;
};

export const getStdiffUrl = (apiUrl: string, userApiToken?: string): string => {
  const token = userApiToken ? userApiToken : '********';
  return `curl ${apiUrl}/predict/stdiff -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer ${token}'  -d '{"input" : "An old mid-century sword is laying on a wooden table."}' > image.png`;
};

export const getResnetUrl = (apiUrl: string, userApiToken?: string) => {
  const token = userApiToken ? userApiToken : '********';
  return `curl ${apiUrl}/predict/resnet-50 -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer ${token}'  -d '{"input" : "'"$( base64 -i sample_image.jpeg)"'"}'`;
};

export const getTortoiseUrl = (apiUrl: string, userApiToken?: string) => {
  const token = userApiToken ? userApiToken : '********';
  return `curl ${apiUrl}/predict/tortoise -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer ${token}'  -d '{"input" : "You shall not pass!"}' > audio.wav`;
};

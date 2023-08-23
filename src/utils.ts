import {
  uniqueNamesGenerator,
  colors,
  animals,
  Config,
} from 'unique-names-generator';

const uniqueNamesGeneratorConfig = {
  dictionaries: [colors, animals],
  style: 'capital',
  separator: '',
} as Config;

export function getNickname() {
  // Generate random nickname, eg. RedDonkey
  const nickname = uniqueNamesGenerator(uniqueNamesGeneratorConfig);

  return nickname;
}

export function isGET(resource: string, req: Request) {
  return req.method === 'GET' && new URL(req.url).pathname === resource;
}

export function getResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

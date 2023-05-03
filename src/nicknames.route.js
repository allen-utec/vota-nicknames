import { uniqueNamesGenerator, colors, animals } from 'unique-names-generator';

const uniqueNamesGeneratorConfig = {
  dictionaries: [colors, animals],
  style: 'capital',
  separator: '',
};

export function getNicknamesHandler(_, res) {
  // Generate random nickname, eg. RedDonkey
  const nickname = uniqueNamesGenerator(uniqueNamesGeneratorConfig);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ nickname }));
}

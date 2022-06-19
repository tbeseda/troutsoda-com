import arc from '@architect/functions';

export const handler = arc.http.async(async function () {
  return {
    statusCode: 200,
    headers: {
      'cache-control':
        'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Trout Soda</title>
</head>
<body style="margin-top: 5rem; text-align: center;">
  <img src="${arc.static('troutsoda.png')}" alt="TroutSoda" width="15%" height="15%">
</body>
</html>
`,
  };
},);

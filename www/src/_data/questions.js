const fetch = require('node-fetch');

module.exports = () => {
  async function getUsers() {
    const result = await fetch(
      'https://headcounthands.hasura.app/v1/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          query MyQuery {
            allWhat {
              title
              content
            }
          }
          
          `,
          variables: {},
        }),
      }
    ).then((res) => res.json());

    return result.data.allWhat
  }

  return getUsers();
};
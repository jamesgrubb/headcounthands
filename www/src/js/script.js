function data(){
    return{
        init($refs){

        }
    }
}

async function questions(){
    const data = await fetch('https://headcounthands.hasura.app/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            query: `
            query MyQuery {
                allWhat {
                  content
                  title
                }
              }
            
            `,
            variables:{}
        })
    }).then(res => res.json())
    console.log(data)
}

questions()
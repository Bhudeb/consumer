import http from 'http'
    function fetchItems(url){
      return new Promise((resolve, reject) => {
        http
          .get(`${url}/items`, (resp) => {
            let data = ''
  
            resp.on('data', (chunk) => {
              data += chunk
            })
  
            resp.on('end', () => {
              // console.log(data)
              resolve(JSON.parse(data))
            })
          })
          .on('error', (err) => {
            console.error('Error: ' + err.message)
            reject(err)
          })
      })}
  
      export default fetchItems;
  
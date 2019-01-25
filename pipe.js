const I = require('image-data-uri')
const axios = require('axios')
const bitpipe = require('bitpipe')
bitpipe.start()
I.encodeFromFile('./icon.png').then(function(res) {
  axios.post("https://pipe.bitdb.network/bitpipe", {
    data: ["", res]
  }, function(err, tx) {
    if (err) {
      console.log(err)
    } else {
      console.log(tx)
    }
  })
})

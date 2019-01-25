const I = require('image-data-uri')
const datapay = require('datapay')
I.encodeFromFile('./icon.png').then(function(res) {
  datapay.build({
    data: ["", res]
  }, function(err, tx) {
    console.log(tx.toString())
  })
})

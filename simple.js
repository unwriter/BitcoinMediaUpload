const I = require('image-data-uri')
const datapay = require('datapay')
I.encodeFromFile('./icon.png').then(function(res) {
  datapay.send({
    data: ["", res]
  }, function(err, tx) {
    console.log(err, tx)
  })
})

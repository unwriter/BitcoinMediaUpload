# Upload Image to Bitcoin

1. simple.js: use datapay to upload an image. Just put an image file in the same folder and change the code to the filename.
2. build.js: Same as simple.js but instead of sending, you can build the transaction and export. Then you can submit it manually to public insight endpoints that accept raw tx broadcast
3. pipe.js: Using a Bitpipe approach. Set up a microservice that accepts Datapay JSON payload and broadcast. This can be powerful if you want to open up the image uploader to other people for free. 

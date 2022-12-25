## Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Format: ```npm run prettier```
- Lint: ```npm run lint```
- Unit Test: ```npm run test```
- Start The Server: ```npm run start```

## Usage
The server will listen on port 3000

### End point to list all available image names
http://localhost:3000/api/available

### End point to resize images

http://localhost:3000/images
##### Expected query arguments are:
- filename: The name of the image. Available image names are:
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica
- height: The height of the image after resizing.
- width: The width of the image after resizing.

#### An example of a correct endpoint call would be:
http://localhost:3000/api/images?filename=fjord&height=300&width=300

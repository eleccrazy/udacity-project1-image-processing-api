import imageProcessor from '../imageProcessor';

describe('Testsuite for image processing', () => {
  it('Expect the processing to be resolved when the correct filename, width, and height parameters are provided', async () => {
    await expectAsync(
      imageProcessor.resizedImage('palmtunnel', 300, 500)
    ).toBeResolved();
  });
  it('Expect input image with the wrong filename to be rejected', async () => {
    await expectAsync(
      imageProcessor.resizedImage('unknownImage', 200, 200)
    ).toBeRejected();
  });
});

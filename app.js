const Exif = require("simple-exiftool");

Exif("./sample.mp4", (error, metadata) => {
  if (error) {
    // handle error
    console.log(error);
  }
  console.log(metadata);
  console.log("Video Name:", metadata.FileName);
  console.log("Duration:", metadata.Duration);
  console.log("Dimension:", metadata.ImageWidth, "x", metadata.ImageHeight);
  console.log("Frame Rate:", metadata.VideoFrameRate);
  console.log("CreateDate :", metadata.CreateDate);
});

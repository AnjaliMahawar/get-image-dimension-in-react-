import React, { useEffect, useState } from "react";

const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};

const App = () => {
  const [imageDimensions, setImageDimensions] = useState({});
  const [imageUrl, setimageUrl] = useState("");
  // const imageUrl = "https://picsum.photos/200/300";

  // useEffect(() => {

  // }, []);
  const getDia = () => {
    loadImage(setImageDimensions, imageUrl);
    console.log(imageDimensions);
  };
  return (
    <div>
      <>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => {
            setimageUrl(e.target.value);
          }}
        />
        <button onClick={getDia}>getImageDimension</button>
        {Object.keys(imageDimensions).length === 0 ? (
          ""
        ) : (
          <>
            <p>
              <b>Height:</b> {imageDimensions.height}{" "}
            </p>
            <p>
              <b>Width:</b> {imageDimensions.width}{" "}
            </p>
          </>
        )}
      </>
    </div>
  );
};

export default App;

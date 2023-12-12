import { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async () => {
    if (image) {
      try {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ml_default");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dqyjr9t6r/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setImageURL(data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      <img src={imageURL} alt="" width={300} />
    </div>
  );
};

export default ImageUpload;

import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhanceimageAPI';
import Download from './Download';

const Home = () => {
  const [uploadImage, setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);
  const [buttontext, setbuttontext] = useState('UPLOAD IMAGE FIRST');

  const UploadImageHandler = async (file) => {
    setuploadImage(URL.createObjectURL(file))
    setloading(true);
    setbuttontext('LOADING');

    try{
      const enhancedURL = await enhancedImageAPI(file);
      setenhancedImage(enhancedURL.image);
      setloading(false);
      setbuttontext('DOWNLOAD');
    } catch(error){
      console.log(error);
      alert("Error while enhancing the image. Please try later.");
      setuploadImage(false);
      setloading(false);
    }
    
  };
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler}/>
      {loading?
      <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage}/>:null}
      <Download loading={loading} enhanced={enhancedImage} tag={buttontext} uploaded={uploadImage}/>
    </>
  )
}

export default Home

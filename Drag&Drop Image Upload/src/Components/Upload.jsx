import React, { useState, useRef } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const newImages = [...images];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        newImages.push({
          id: Date.now() + i,
          file,
          preview: readerEvent.target.result,
        });
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (id) => {
    const newImages = images.filter(image => image.id !== id);
    setImages(newImages);
  };

  const handleClearAll = () => {
    setImages([]);
  };

  const handleUpload = () => {
    // Burada seçilen görselleri bir API'ye gönderme işlemi yapılabilir.
    console.log('Gönderilecek Görseller:', images);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const newImages = [...images];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        newImages.push({
          id: Date.now() + i,
          file,
          preview: readerEvent.target.result,
        });
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const handleComponentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      style={{
        background: '#333',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        border: isDragging ? '2px dashed #007BFF' : '2px dashed transparent',
        height: images.length === 0 ? '300px' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={handleComponentClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {images.length === 0 && (
        <div>
          <p>Sürükleyip bırakarak görsel ekleyin veya dosya seçmek için tıklayın.</p>
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      )}
      {images.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginLeft: '-10px',
            marginRight: '-10px',
          }}
        >
          {images.map(image => (
            <div key={image.id} style={{ flex: '0 0 calc(33.3333% - 20px)', position: 'relative', margin: '10px' }}>
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={image.preview}
                  alt="Preview"
                  style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0', transition: 'transform 0.2s' }}
                  onClick={() => handleImageClick(image)}
                />
                <button
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0,
                    color: '#fff',
                  }}
                  onClick={() => handleImageRemove(image.id)}
                >
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    &#10006;
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {images.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={handleUpload} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
            Yükle
          </button>
        </div>
      )}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
        >
          <div style={{ maxWidth: '80%', maxHeight: '80%', overflow: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
            <img
              src={selectedImage.preview}
              alt="Preview"
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
                color: '#fff',
              }}
              onClick={handleClosePopup}
            >
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(255, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                &#10006;
              </div>
            </button>
          </div>
        </div>
      )}
      {images.length > 0 && (
        <div
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleClearAll}
        >
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            &#10006;
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

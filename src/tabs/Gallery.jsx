import React from "react";
const Gallery = props => {
  return (
    <div className="Gallery-page">
      <div className="title block blue">GALLERY</div>
      <div className="tents desc block blue">
        <h3>
          Take a look at our gallery of past events for some arrangment ideas
        </h3>
      </div>
      <div className="image-group">
        <div className="gallery tent float" />
        <div className="gallery tent float" />
        <div className="gallery tent float" />
        <div className="gallery tent float" />
        <div className="gallery tent float" />
        <div className="gallery tent float" />
        <div className="gallery tent float" />
        <div className="gallery tent float" />
        <div className="gallery tent float" />
      </div>
    </div>
  );
};

export default Gallery;

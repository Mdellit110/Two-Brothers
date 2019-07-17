import React from "react";
const Home = props => {
  const { setOpenTab } = props;
  return (
    <div className="Homepage">
      <div className="block call-us">
        <p>TWO BROTHERS TENT RENTAL</p>
        <h1>CALL US FOR A QUOTE!</h1>
        <h1>(516)-724-1804</h1>
      </div>
      <div className="block services">
        <h1 onClick={() => setOpenTab("gallery")}>GALLERY</h1>
        <div className="images">
          <div className="image tent-1" />
          <div className="image tent-2" />
          <div className="image tent-3" />
        </div>
      </div>
      <div className="block about">
        <h1>ABOUT</h1>
        <div className="text-content">
          <h3>
            Etiam id mauris malesuada metus luctus luctus nec id mauris. Fusce
            eleifend justo non magna ullamcorper facilisis. Morbi nec elit
            vehicula, dignissim diam et, gravida mauris. Duis eget neque
            elementum, dapibus turpis ac, placerat ex. Nullam velit erat, porta
            vitae dolor consequat, ultricies cursus massa. Pellentesque commodo
            erat at lorem venenatis dictum. In interdum quam nec dictum tempor.
            Quisque laoreet, urna at tristique egestas, nibh sem auctor metus,
            nec convallis mauris mauris ut libero. In hac habitasse platea
            dictumst. Nulla a mi lacus. Maecenas nisl tortor, pretium eu turpis
            id, varius porttitor nisl.
          </h3>
          <h3>
            Etiam id mauris malesuada metus luctus luctus nec id mauris. Fusce
            eleifend justo non magna ullamcorper facilisis. Morbi nec elit
            vehicula, dignissim diam et, gravida mauris. Duis eget neque
            elementum, dapibus turpis ac, placerat ex. Nullam velit erat, porta
            vitae dolor consequat, ultricies cursus massa. Pellentesque commodo
            erat at lorem venenatis dictum. In interdum quam nec dictum tempor.
            Quisque laoreet, urna at tristique egestas, nibh sem auctor metus,
            nec convallis mauris mauris ut libero. In hac habitasse platea
            dictumst. Nulla a mi lacus. Maecenas nisl tortor, pretium eu turpis
            id, varius porttitor nisl.
          </h3>
        </div>
      </div>
      <div className="spacer2" />
    </div>
  );
};

export default Home;

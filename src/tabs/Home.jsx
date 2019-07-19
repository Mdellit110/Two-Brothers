import React from "react";
const Home = props => {
  const { setOpenTab } = props;
  return (
    <div className="Homepage">
      <div className="title block blue">TWO BROTHERS TENT RENTAL</div>
      <div className="block call-us">
        <h2>CALL US FOR A QUOTE!</h2>
        <h2>(516)-724-1804</h2>
      </div>
      <div className="block services">
        <h1 onClick={() => setOpenTab("gallery")}>GALLERY</h1>
        <div className="images">
          <div className="image tent" />
          <div className="image tent" />
          <div className="image tent" />
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
    </div>
  );
};

export default Home;

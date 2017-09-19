import React, { Component } from 'react';
import { Parallax, bgImage } from 'react-parallax';

class Products extends Component {
  render() {
    return (
      <div >
        <div >

          <br /><br /><br />
        <Parallax bgImage="https://preview.ibb.co/gvio15/Bagh_sun.jpg" strength={300}>
          <h1 className="container-fluid" id="col">Products page</h1>
            <div  style={{
               width: 0,
               height: 350,
               backgroundColor: '#450093'
              }}></div>

            <h1 className="container-fluid" id="col" style={{
                color: '#ffffff'}}>Something else</h1>
              <p className="container-fluid" id="side" style={{
              color: '#ffffff', }} >Parallax is a displacement or difference in the apparent position of an object viewed along two different lines of sight, and is measured by the angle or semi-angle of inclination between those two lines.
            [1][2] The term is derived from the Greek word παράλλαξις (parallaxis), meaning "alternation". Due to foreshortening, nearby objects have a larger parallax than more distant objects when observed from different positions, so parallax can be used to determine distances.
            To measure large distances, such as the distance of a planet or a star from the earth, astronomers use the principle of parallax. Here, the term "parallax" is the semi-angle of inclination between two sight-lines to the star, as observed when the Earth is on opposite sides of the Sun in its orbit.
            [3] These distances form the lowest rung of what is called "the cosmic distance ladder", the first in a succession of methods by which astronomers determine the distances to celestial objects, serving as a basis for other distance measurements in astronomy forming the higher rungs of the ladder.</p>

      </Parallax>

      <Parallax bgImage="https://preview.ibb.co/fPFAyk/Bagh_sunedit1.jpg" strength={300}>
        <div style={{
            height: 350,

        }}></div>
      <p className="container-fluid" style={{color: '#ffffff'}}>An image hosting service allows individuals to upload images to an Internet website.
          The image host will then store the image onto its server, and show the individual different types
          of code to allow others to view that image. An image hosting service allows individuals to upload
          images to an Internet website. The image host will then store the image onto its server,
          and show the individual different types of code to allow others to view that image.</p>

    </Parallax>

      <Parallax bgImage="https://preview.ibb.co/d2FFW5/Bagh_sunedit.jpg" strength={300}>
        <div style={{
            height: 350,

        }}></div>
      <p className="container-fluid" style={{color: '#ffffff'}}>An image hosting service allows individuals to upload images to an Internet website.
          The image host will then store the image onto its server, and show the individual different types
          of code to allow others to view that image. An image hosting service allows individuals to upload
          images to an Internet website. The image host will then store the image onto its server,
          and show the individual different types of code to allow others to view that image.</p>

    </Parallax>
        <p className="container-fluid">
  		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        </div>
      </div>

    );
  }
}

export default Products;

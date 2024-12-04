import { Component } from "react";
import UpperBanner from "./UpperBanner";
import SliderGallery from "./SliderGallery";
// import Grid from "./Grid";
class MainSection extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <UpperBanner />

        {/* <Grid search="harry" /> */}
        <SliderGallery search="harry potter" titoloSezione="Harry Potter" />

        {/* <Grid search="avatar" /> */}
        <SliderGallery search="avatar" titoloSezione="Avatar" />

        {/* <Grid search="natale a" /> */}
        <SliderGallery search="natale a" titoloSezione="Cinepanettone" />
      </div>
    );
  }
}

export default MainSection;

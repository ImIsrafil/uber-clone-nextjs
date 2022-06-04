import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxGl from "mapbox-gl";

mapboxGl.accessToken =
  "pk.eyJ1IjoiaW1pc3JhZmlsIiwiYSI6ImNrejFqN2dnODFrd2IydXFrZ3l1b3pnNHYifQ.-UbhPITPIRgK8yZ3oMOsdw";

const Map = ({pikupCoordinates, dropoffCoordinates}) => {

  // console.log(props);

  useEffect(() => {
    const map = new mapboxGl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.00032, 23.86165],
      zoom: 3,
    });

    if (pikupCoordinates) {
      addToMap(map, pikupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pikupCoordinates && dropoffCoordinates) {
      map.fitBounds([
        pikupCoordinates,
        dropoffCoordinates
      ], {
        padding: 60
      });
    }

  }, [pikupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxGl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
    flex-1 h-1/2
`;

export default Map;

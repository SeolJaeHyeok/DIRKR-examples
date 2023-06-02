"use client"

import { useContext, useState } from 'react';
import { places } from '../data';
import { PlaceType, getImageUrl } from '../utils';
import ImageContextProvider, { ImageContext } from './imageContext';

export default function App() {
  return (
    <ImageContextProvider>
      <ContextPage />
    </ImageContextProvider>
  )
}

function ContextPage() {
  const { isLarge, setIsLarge, imageSize } = useContext(ImageContext);

  return (
      <div>
        <h1>Context Examples</h1>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              console.log(e.target.checked)
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </div>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }: { place: PlaceType }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place}: { place: PlaceType }) {
  const {imageSize} = useContext(ImageContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

import React from 'react';

export default function Cat(props) {
  const { type = '',
          text = '%20',
          fontSize = '50',
          color = 'white',
          filter = '',
          width = '',
          height = ''
        } = props;

  const uniqueNum = Math.random();
  const url = `https://cataas.com/cat/${type}/says/${text}?s=${fontSize}&c=${color}&filter=${filter}&width=${width}&height=${height}&uniqueNum=${uniqueNum}`;
  const elements = (
      <img src={url} alt= 'Cat'/>
  );
  return elements;

}
//TODO LIST
// * fix the CSS
// * Track thee usage using firebase

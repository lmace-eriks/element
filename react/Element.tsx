import React, { useEffect, useState } from 'react';

// Styles
import styles from "./styles.css";

interface ElementProps {

}

const Element: StorefrontFunctionComponent<ElementProps> = ({ }) => {
  return (
    <div>Element</div>
  )
}

Element.schema = {
  title: 'Element',
  description: '',
  type: 'object',
  properties: {}
}

export default Element;
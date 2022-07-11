import React, { ReactChildren, useEffect, useState } from 'react';

interface ElementProps {
  tag: string
  attributes: Array<AttributeObject>
  children: ReactChildren
  classes: Array<string>
}

interface AttributeObject {
  key: string
  value: string
}

const Element: StorefrontFunctionComponent<ElementProps> = ({ tag, attributes, classes, children }) => {
  const [openGate, setOpenGate] = useState<Boolean>(true);
  const [htmlAttributes, setHTMLAttributes] = useState<any>();
  const [htmlClasses, setHTMLClasses] = useState<string>();

  const CustomTag: any = `${tag}`;
  const classPrefix = "eriksbikeshop-element-1-x-";

  const buildAttributes = () => {
    if (!attributes) return;

    const tempAttributes: any = {};

    attributes.forEach(att => {
      tempAttributes[att.key] = att.value;
    })

    setHTMLAttributes(tempAttributes);
  }

  const buildClasses = () => {
    if (!classes) {
      setHTMLClasses("");
      return;
    }

    let tempClasses: string = "";

    classes.forEach((selector, index) => {
      // Prevents a single space (" ") at the beginning of the class attribute - LM
      tempClasses = index ? `${tempClasses} ${classPrefix}${selector}` : `${classPrefix}${selector}`;
    })

    setHTMLClasses(tempClasses);
  }

  useEffect(() => {
    if (!openGate) return;
    setOpenGate(false);
    buildAttributes();
    buildClasses()
  });

  return (
    <CustomTag {...htmlAttributes} className={htmlClasses}>{children}</CustomTag>
  )
}

Element.schema = {
  title: 'Element',
  description: '',
  type: 'object',
  properties: {
    tag: {
      title: "HTML Element Tag",
      description: "div, article, section... Do not include <>.",
      type: "string"
    },
    attributes: {
      title: "Attributes",
      description: "List of attributes for HTML Element",
      type: "array",
      items: {
        properties: {
          __editorItemTitle: {
            title: "Attribute",
            type: "string",
          },
          key: {
            title: "Key",
            descripiton: "Attribute Name / Key",
            type: "string"
          },
          value: {
            title: "Value",
            descripiton: "Attribute Value",
            type: "string"
          }
        }
      }
    }
  }
}

export default Element;
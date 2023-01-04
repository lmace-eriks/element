import React, { ReactChildren, useEffect, useState, useRef } from 'react';

interface ElementProps {
  tag: string
  attributes: Array<AttributeObject>
  children: ReactChildren
  blockStyle: string
  blockClass: string
  classes: Array<string>
  text: string
}

interface AttributeObject {
  key: string
  value: string
}

const Element: StorefrontFunctionComponent<ElementProps> = ({ blockStyle, tag, attributes, blockClass, classes, text, children }) => {
  const openGate = useRef(true);
  const [loading, setLoading] = useState(true);
  const [htmlAttributes, setHTMLAttributes] = useState<any>();
  const [htmlClasses, setHTMLClasses] = useState<string>("");
  const [styleRules, setStyleRules] = useState<any>();

  const defaultTag = "div";
  const CustomTag: any = !tag ? `${defaultTag}` : `${tag}`;
  const classPrefix = "eriksbikeshop-element-1-x-";

  const buildAttributes = () => {
    const tempAttributes: any = {};

    attributes.forEach(att => {
      tempAttributes[att.key] = att.value;
    })

    setHTMLAttributes(tempAttributes);
  }

  const buildClasses = () => {
    if (!classes) return;

    let tempClasses = "";

    classes.forEach((selector, index) => {
      // Ternary prevents a single space (" ") at the beginning of the class attribute - LM
      tempClasses = index ? `${tempClasses} ${classPrefix}${selector}` : `${classPrefix}${selector}`;
    })

    setHTMLClasses(tempClasses);
  }

  const buildStyle = () => {
    const styleOutput: any = {};
    const propertiesCSS: any = [];
    const valuesCSS: any = [];

    // Split CSS rules into array - LM
    const rules = blockStyle.split("; ");

    // Remove ; from final rule in array - LM
    rules[rules.length - 1] = rules[rules.length - 1].replace(";", "");

    rules.forEach((rule) => {
      // Split Properties and Values into separate items - LM
      const propertiesAndValues = rule.split(": ");

      // Toggle for filling Property and Value arrays - LM
      propertiesAndValues.forEach((tempItem, index) => {
        index % 2 === 0 ? propertiesCSS.push(tempItem) : valuesCSS.push(tempItem);
      })
    })

    // Fill styleOutput object with properties and values - LM
    for (let index = 0; index < rules.length; index++) {
      styleOutput[propertiesCSS[index]] = valuesCSS[index];
    }

    setStyleRules(styleOutput);
  }

  useEffect(() => {
    if (!openGate.current) return;
    openGate.current = false;

    if (blockStyle) buildStyle();
    if (attributes) buildAttributes();
    if (!blockClass) buildClasses();

    setLoading(false);
  });

  return !loading ? <CustomTag {...htmlAttributes} className={blockClass ? `${classPrefix}${blockClass}` : htmlClasses} style={styleRules} >{text || children}</CustomTag> : <></>;
}

Element.schema = {
  title: 'Element',
  description: '',
  type: 'object',
  properties: {
    tag: {
      title: "HTML Element Tag",
      description: "div, article, section, h2... Do not include <>.",
      type: "string"
    },
    text: {
      title: "Inner Text",
      description: "Only used if there are no children / decendants.",
      type: "string"
    },
    blockStyle: {
      title: "Style",
      description: "Accepts all Javascript CSS properties. Ex: borderRadius: 1rem; padding: 1rem;",
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
            default: "Attribute"
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
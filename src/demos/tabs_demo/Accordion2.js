import { cloneElement, forwardRef, useImperativeHandle, useRef, useState } from 'react';

function Accordion2Component ({ children }, ref) {
  const accItems = useRef([]);

  useImperativeHandle(ref, () => ({
    hideAll: () => {
      accItems.current.forEach( accItem => accItem.itemRef && accItem.itemRef.current.hide() )
    }
  }))

  const attachRef = (child, index) => {
    const childRef = { current: null };
    const clonedElement = cloneElement(child, {key: index, ref: childRef});
    accItems.current = [...accItems.current, { index, itemRef: clonedElement.ref }]
    return clonedElement;
  }

  return (
    <div className="accordion">
      {children.map( (child, index) => attachRef(child, index))}
    </div>
  )
}

// Each item cab handle itself
function ItemComponent ({ title, children }, ref) {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    visible: visible,
    show : () => setVisible(true),
    hide: () => setVisible(false)
  }))

  const toggle = () => {
    setVisible( currentState => !currentState )
  }

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button onClick={toggle} className={`accordion-button ${!visible && 'collapsed'}`} type="button">{title}</button>
      </h2>
      <div id="collapseOne" className={`accordion-collapse collapse ${visible && 'show'}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  )
}

export const Accordion2 = forwardRef(Accordion2Component);
export const Item= forwardRef(ItemComponent);

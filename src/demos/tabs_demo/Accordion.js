import { cloneElement, forwardRef, useImperativeHandle, useRef, useState } from 'react';

function Accordion ({ children }) {
  return (
    <div className="accordion">
      {children.map( child => cloneElement(child, {ref: child.ref}) )}
    </div>
  )
}

// Each item cab handle itself
function Item ({ title, children }, ref) {
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

Accordion.Item =  forwardRef(Item) ;

export default Accordion;

import { Accordion2, Item } from "./Accordion2";
import { useRef } from "react";

function PageWithAccordion () {
  const accRef = useRef();

  const hideAll = () => {
    console.log(accRef.current.hideAll());
  }

  return (
    <div>
      <h2>Page With Accordion</h2>
      <button onClick={hideAll}>hideAll</button>
      <Accordion2 ref={accRef}>
        <Item title="Item number 1">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit overflow.
        </Item>
        <Item title="Item number 1">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit overflow.
        </Item>
      </Accordion2>
    </div>
  )
}

export default PageWithAccordion;

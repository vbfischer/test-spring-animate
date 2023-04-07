import { animated, useTransition } from "@react-spring/web";
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translate3d(0, 2000px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 2000px, 0)" },
  });

  return (
    <div className="App">
      <button onClick={() => setIsOpen((cur) => !cur)}>Button</button>
      <div className="Container">
        {transitions((style, item) => (
          <>
            {item && (
              <animated.div className="Box" style={style}>
                Box {item.toString()}
              </animated.div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default App;

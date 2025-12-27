import { useState, useRef, useCallback, useEffect } from "react";

const VirtualizedList = ({ items, itemHeight, windowHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef(null);

  const visibleItemCount = Math.ceil(windowHeight / itemHeight);
  const totalHeight = items.length * itemHeight;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItemCount + 1, items.length);

  const onScroll = useCallback((event) => {
    setScrollTop(event.target.scrollTop);
  }, []);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", onScroll);
      return () => {
        listElement.removeEventListener("scroll", onScroll);
      };
    }
  }, [onScroll]);

  const displayItems = () => {
    const visibleItems = [];

    for (let i = startIndex; i < endIndex; i++) {
      const item = items[i];
      const itemStyle = {
        position: "absolute",
        top: `${i * itemHeight}px`,
        height: `${itemHeight}px`,
        left: 0,
        right: 0,
      };
      visibleItems.push(
        <div key={i} style={itemStyle}>
          {item}
        </div>
      );
    }

    return visibleItems;
  };

  return (
    <div
      ref={listRef}
      style={{
        height: `${windowHeight}px`,
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div style={{ height: `${totalHeight}px` }}>{displayItems()}</div>
    </div>
  );
};

export default VirtualizedList;

import React from "react";
import Article from "./Article";
import Comment from "./Comment";
// top level component
// The App component (being our top level component) wraps around both Article and Comment
function App() {
  return (
    // we refer to Comment and Article as children components of App
    <div>
      <Article />
      <Comment />
    </div>
  );
}

export default App;

// Fragments without props
function MyComponent() {
  <>
    <h1>Title</h1>
    <h2>Subtitle</h2>
  </>;
}

// Fragments with props
function MyComponent2() {
  <React.Fragment key="1">
    <h1>Title</h1>
    <h2>Subtitle</h2>
  </React.Fragment>;
}

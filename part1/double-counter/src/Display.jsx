const Display = ({ total }) => {
  if (total === 0) {
    return <div>there are no clicks</div>;
  } else {
    return <div>The total clicks are {total}</div>;
  }
};

export default Display;

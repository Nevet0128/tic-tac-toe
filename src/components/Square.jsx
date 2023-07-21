// eslint-disable-next-line react/prop-types
const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className="square" onClick={handleClick}>
      {children}
    </div>
  );
};

export default Square;

const ResultFront = ({result}) => {
  return (
    <>
        <img src={result.image_thumbnail_path} alt='show-poster' />
        <p> {result.name} </p>
        <p> {result.start_date.substring(0,4)} </p>
        <p> {result.network} </p>
    </>)
};

export default ResultFront;

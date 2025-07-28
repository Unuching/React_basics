const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // learn array from

  return (
    <div className='rating-container'>
      <h2>Rate Your Experience</h2>
      <div className='stars'>
        {stars.map((star) => (
          <span key={star} className='star'>
            {'\u2605'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;

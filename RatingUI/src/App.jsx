import Rating from './Components/Rating';

const App = () => {
  return (
    <div>
      <Rating
        feedbacks={['Hate it', 'Dislike it', 'Ehh', 'Like it', 'Love it']}
      />
    </div>
  );
};

export default App;

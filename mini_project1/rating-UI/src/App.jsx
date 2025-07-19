import Rating from './components/rating';

const App = () => {
  return (
    <div>
      <Rating
        feedBackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Love it',
        ]}
      />
    </div>
  );
};

export default App;

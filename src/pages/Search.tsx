import { domesticsearch } from "../apis/airplane";

const Search = () => {
  const searchbtn = () => {
    domesticsearch();
  };
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};
export default Search;

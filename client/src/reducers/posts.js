/* eslint-disable */
export default (posts = [], action) => {
  switch (action.type) //Here we are not using break because return statement will automatically stop the switch case
{
  case "UPDATE":
      return posts.map((post)=>post._id === action.payload._id ? action.payload : post);
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    
    default:
        return posts;
    
  }
};

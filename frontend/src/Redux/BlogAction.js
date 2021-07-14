import axios from "axios";

export const addBlog = (Title, Description) => (dispatch) => {
  // console.log("Title : ", Title, "desc : ", Description);
  axios
    .post("http://localhost:8000/post", { Title, Description })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const updateBlog = (_id, Title, Description) => () => {
  axios
    .patch(`http://localhost:8000/post/${_id}`, { Title, Description })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const fetchBlog = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8000/posts")
      .then((response) => {
        const users = response.data;
        console.log("Reducer vala : ", users);
        dispatch({
          type: "FETCHBLOG",
          payload: users,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const deleteBlog = (id) => (dispatch) => {
  console.log("id", id);
  axios
    .delete(`http://localhost:8000//post/${id}`)
    .then((res) =>
      dispatch({
        type: "DELETEBLOG",
        payload: id,
      })
    )
    .catch((err) => {
      console.log("delete erros", err.message);
    });
};

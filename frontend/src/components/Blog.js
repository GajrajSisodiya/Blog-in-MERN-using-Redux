import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../Redux/BlogAction";
import { useHistory } from "react-router-dom";

function Blog() {
  const [inputData, setInputData] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const list = useSelector((state) => state.apiData);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, []);
  console.log("list", list);
  return (
    <>
      <div className="d-flex mt-0 container">
        <div className="col-11">
          <section className="blog-list">
            <div className="">
              <div className="item mb-5">
                <div className="media">
                  <div className="media-body">
                    {list.fetchAPI.map((e) => {
                      return (
                        <div>
                          <div key={e._id}>
                            <h3 className="title mb-1 ml-2">
                              <p>{e.Title} </p>
                            </h3>
                          </div>
                          <div className="intro ml-2">
                            {e.Description.substring(0, 200)}...
                          </div>
                          <input
                            type="hidden"
                            name={inputData}
                            onClick={(e) => setInputData(e.target.value)}
                          />
                          <button
                            value={inputData}
                            type="submit"
                            id="green"
                            className="more-link btn mb-3"
                            onClick={() => {
                              history.push({
                                pathname: `/FullBlog/${e._id}`,
                                state: {
                                  ...e.value,
                                },
                              });
                            }}
                          >
                            Read more &rarr;
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Blog;

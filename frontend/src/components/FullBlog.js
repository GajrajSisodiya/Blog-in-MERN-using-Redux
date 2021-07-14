import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { editBlog } from "../Redux/BlogAction";

function FullBlog() {
  const list = useSelector((state) => state.apiData);
  const { _id } = useParams();
  console.log("id", _id);

  const [fullBlog, setFullBlog] = useState();
  useEffect(() => {
    console.log("list", list);
    list.fetchAPI.map((e) => {
      if (e._id === _id) {
        setFullBlog(e);
      }
    });
  }, [list, _id]);
  useEffect(() => {
    console.log("FullBlog", fullBlog);
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  // const {
  //   params: { _id },
  // } = useRouteMatch("/Blog/:_id");

  // const search = location.search;
  // const id = new URLSearchParams(search).get(location.state.Title);
  // console.log(id);

  return (
    <div>
      <div className="container">
        <article className="blog-post">
          <div className="container">
            <div className="mx-auto col-10 blog-post-body">
              <div>
                {fullBlog ? (
                  <React.Fragment>
                    <div key={fullBlog._id}>
                      <h6 className="mt-4">{fullBlog.Title}</h6>
                    </div>

                    <div className="intro">{fullBlog.Description}</div>
                    <div className="mx-auto mt-2">
                      <div>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => {
                            history.push({
                              pathname: `/CreateBlog/${fullBlog._id}`,
                              state: {
                                data: "Hello react",
                                ...fullBlog.value,
                              },
                            });
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <div>No Post available</div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
      ;
    </div>
  );
}

export default FullBlog;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addBlog, updateBlog } from "../Redux/BlogAction";

function CreateBlog() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBlog, setInputBlog] = useState("");
  const dispatch = useDispatch();

  const list = useSelector((state) => state.apiData);
  const { _id } = useParams();
  console.log("id", _id);

  const [editBlog, setEditBlog] = useState();

  useEffect(() => {
    list.fetchAPI.map((e) => {
      if (e._id === _id) {
        setEditBlog(e);
      }
    });
  });

  console.log("editBlog : ", editBlog);
  return (
    <>
      <div className="container contact">
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              />
              <h4>Write Your Blog here</h4>
            </div>
          </div>
          <div className="col-md-9">
            <div className="contact-form">
              {editBlog ? (
                <>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="comment">
                      Title of Blog
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={editBlog.Title}
                        onChange={(e) => setInputTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="comment">
                      New Blog
                    </label>
                    <div className="">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        defaultValue={editBlog.Description}
                        onChange={(e) => setInputBlog(e.target.value)}
                      ></textarea>
                    </div>
                  </div>{" "}
                  {/* <div className="form-group">
              //   <input type="file" name="file" className="text-primary " />
              // </div> */}
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          // setInputTitle("");
                          // setInputBlog("");
                          dispatch(
                            updateBlog(editBlog._id, inputTitle, inputBlog)
                          );
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="comment">
                      Title of Blog
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="comment">
                      New Blog
                    </label>
                    <div className="">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        value={inputBlog}
                        onChange={(e) => setInputBlog(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  {/* <div className="form-group">
                <input type="file" name="file" className="text-primary " />
              </div> */}
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          setInputTitle("");
                          setInputBlog("");
                          dispatch(addBlog(inputTitle, inputBlog));
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;

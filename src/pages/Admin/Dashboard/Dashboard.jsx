import React, { useContext } from "react";
import MyContext from "../../../Context/data/MyContext";
import NavBar from "../../../Components/NavBar/NavBar";
import thumbnail from "../../../assets/DE2bGfs.jpeg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <>
      <NavBar />
      <div className="py-10 main trans">
        <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
          <div className="left">
            <img
              className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1"
              src={"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}
              alt="profile"
            />
          </div>
          <div className="right">
            <h1
              className="text-center font-bold text-2xl mb-2"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              Username
            </h1>

            <h2
              style={{ color: mode === "dark" ? "white" : "black" }}
              className="font-semibold"
            >
              profession
            </h2>
            <h2
              style={{ color: mode === "dark" ? "white" : "black" }}
              className="font-semibold"
            >
              name@example.com
            </h2>
            <h2
              style={{ color: mode === "dark" ? "white" : "black" }}
              className="font-semibold"
            >
              <span>Total Blog : </span> 15
            </h2>
            <div className=" flex gap-2 mt-2">
              <Link to={"/createblog"}>
                <div className=" mb-2">
                  <Button
                    style={{
                      background:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : "rgb(30, 41, 59)",
                      color: mode === "dark" ? "black" : "white",
                    }}
                    className="px-8 py-2"
                  >
                    Create Blog
                  </Button>
                </div>
              </Link>
              <div className="mb-2">
                <Button
                  style={{
                    background:
                      mode === "dark"
                        ? "rgb(226, 232, 240)"
                        : "rgb(30, 41, 59)",
                    color: mode === "dark" ? "black" : "white",
                  }}
                  className="px-8 py-2"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Line  */}
        <hr
          className={`border-2
               ${mode === "dark" ? "border-gray-300" : "border-gray-400"}`}
        />

        {/* Table  */}
        <div className="">
          <div className=" container mx-auto px-4 max-w-7xl my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
              {/* table  */}
              <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                {/* thead  */}
                <thead
                  style={{
                    background: mode === "dark" ? "white" : "rgb(30, 41, 59)",
                  }}
                  className="text-xs "
                >
                  <tr>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      S.No
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Thumbnail
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Title
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Category
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Date
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                {/* tbody  */}
                <tbody>
                  <tr
                    className=" border-b-2"
                    style={{
                      background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                    }}
                  >
                    {/* S.No   */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"1."}
                    </td>

                    {/* Blog Thumbnail  */}
                    <th
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      scope="row"
                      className="px-6 py-4 font-medium "
                    >
                      {/* thumbnail  */}
                      <img
                        className="w-16 rounded-lg"
                        src={thumbnail}
                        alt="thumbnail"
                      />
                    </th>

                    {/* Blog Title  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"React Introduction"}
                    </td>

                    {/* Blog Category  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"reactjs"}
                    </td>

                    {/* Blog Date  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"Jul 25, 2023"}
                    </td>

                    {/* Delete Blog  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      <button className=" px-4 py-1 rounded-lg text-white font-bold bg-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr
                    className=" border-b-2"
                    style={{
                      background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                    }}
                  >
                    {/* S.No   */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"2."}
                    </td>

                    {/* Blog Thumbnail  */}
                    <th
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      scope="row"
                      className="px-6 py-4 font-medium "
                    >
                      {/* thumbnail  */}
                      <img
                        className="w-16 rounded-lg"
                        src={thumbnail}
                        alt="thumbnail"
                      />
                    </th>

                    {/* Blog Title  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"JavaScript Introduction"}
                    </td>

                    {/* Blog Category  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"JavaScript"}
                    </td>

                    {/* Blog Date  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      {"Jan 23, 2024"}
                    </td>

                    {/* Delete Blog  */}
                    <td
                      style={{ color: mode === "dark" ? "white" : "black" }}
                      className="px-6 py-4"
                    >
                      <button className=" px-4 py-1 rounded-lg text-white font-bold bg-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

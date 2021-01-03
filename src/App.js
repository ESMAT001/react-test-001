import logo from './logo.svg';
import './App.css';
let state = {
  options: ["Aaa", "A", 'd'],
  header: "Indecision app"
}
function App() {

  return (
    <div className="container-fluid d-flex align-items-center">
     
    <div className=" col-11 col-md-9 col-lg-6 p-5 mx-auto">
      <h2 className="text-center  font-weight-light">
        {state.header}
      </h2>
      <hr className="hr"/>

      <div className=" mx-auto">
        <button className="btn btn-danger btn-block shadow">
          Clear all
        </button>
        <button className="btn btn-warning btn-block shadow">
          select
        </button>
        <hr className="hr" />
        <ol className="p-0 my-3">
          {
          state.options.map((value) => {
          return <li
            className="shadow rounded bg-info text-white w-100 mb-3 p-1 pl-3 align-items-center d-flex justify-content-between"
            key={value}>{value} <button className="btn text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="  bi-x"
                viewBox="0 0 16 16">
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            </li>
          })
          }

        </ol>
        <div className="input-group">
          <input id="textBox" className="form-control" type="text" placeholder="Enter text here"/>
          <div class="input-group-append">
            <button class="btn btn-success shadow">Add</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  );
}

export default App;

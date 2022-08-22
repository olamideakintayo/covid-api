
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "./redux/features/fetchSlice";

function App() {
  const { data, loading } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // console.log(data.data.states);
  }, []);

  if (loading === true) {
    return <p className="loader">Loading ...</p>;
  }
  return (
    <div className="App ">
      <h1>Covid19 Nigeria Data</h1>
      <h2>Total Results: </h2>
      {Object.entries(data).map(([key, value], i) => (
        <ul className="" key={i}>
          <li>Samples Tested: {value.totalSamplesTested}</li>
          <li>Active Cases :{value.totalActiveCases}</li>
          <li>Confirmed Cases:{value.totalConfirmedCases}</li>
          <li>
            <span className="positive">Confirm Discharged</span>:
            {value.discharged}
          </li>
          <li>
            <span className="negative">Deaths</span>: {value.death}
          </li>
        </ul>
      ))}

      <div className="text-center">
        <h2>State Results</h2>
        {Object.entries(data).map(([key, value], i) => (
          <ul className="" key={i}>
            <li>State: {value.states[i].state}</li>
            <li>Confirmed Cases: {value.states[i].confirmedCases}</li>
            <li>Cases on Admission: {value.states[i].casesOnAdmission}</li>
            <li>
              {" "}
              <span className="positive">Discharged</span>:{" "}
              {value.states[i].dscharged}
            </li>
            <li>
              {" "}
              <span className="negative">Deaths</span>: {value.states[i].death}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;

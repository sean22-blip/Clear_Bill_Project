import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function InputService() {
  const [service_name, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [patientId, setPatientId] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user);
  useEffect(() => {
    console.log("user id is: " + user.id);
    if (!user.id) {
      return;
    }
    fetch(`http://localhost:5000/api/doctors/${user.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Doctor not found");
        return res.json();
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  async function handleInputService() {
    try {
      const result = await fetch(
        `http://localhost:5000/api/doctors/${user.id}/input`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            patientId: parseInt(patientId),
            service_name: service_name,
            description: description,
            cost: parseFloat(cost),
          }),
        },
      );
      const data = await result.json();
      if (!result.ok) {
        console.log("Response" + data);
        setError(data.error);
        return;
      }

      alert("successfully inserted service" + JSON.stringify(data));
      navigate("/doctor/dashboard");
    } catch (error) {
      console.log("There is an error in generateService" + error.message);
      setError(error.message);
    }
  }

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return (
      <h1 className=" items-center m-[20%]">
        <p className="">Error: {error}</p>
        <div className="text-center border border-gray-700 rounded-md text-white bg-orange-500 hover:bg-orange-600 text-md py-3 hover:border-gray-500 mt-5">
          <button
            type="button"
            onClick={() => {
              {
                setError(null);
                navigate("/doctor/dashboard");
              }
            }}
          >
            Return to Dashboard
          </button>
        </div>
      </h1>
    );
  }
  return (
    <>
      <h3 className="flex justify-center text-3xl mt-[3.5em] font-bold ">
        Provided Service
      </h3>

      <div className="flex ">
        <div className="mt-[4.5em] ml-[25%] grid justify-center py-10 w-1/3 border border-[#00668A] rounded-lg">
          <div className="flex flex-rows gap-[1em]  ">
            <div className="grid pr-[1em]">
              <label>Patient ID: </label>
              <label>Service_Name: </label>
              <label>Description: </label>
              <label>Cost: </label>
            </div>

            <div className="grid gap-4">
              <input
                className=" border border-[#00668A] rounded-sm px-2 "
                type="text"
                onChange={(e) => setPatientId(e.target.value)}
              ></input>
              <input
                className=" border border-[#00668A] rounded-sm px-2 "
                type="text"
                onChange={(e) => setServiceName(e.target.value)}
              ></input>
              <input
                className=" border border-[#00668A] rounded-sm px-2"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              ></input>
              <input
                className=" border border-[#00668A] rounded-sm px-2"
                type="text"
                onChange={(e) => setCost(e.target.value)}
              ></input>
            </div>
          </div>
        </div>

        <div className="mt-[6.5em] ml-[4em] text-center">
          <div className="border border-gray-700 rounded-md m-4 text-white bg-blue-500 hover:bg-blue-600 text-md py-1 hover:border-gray-500">
            <button type="button" onClick={handleInputService}>
              Insert Service
            </button>
          </div>
          <div className="border border-gray-700 rounded-md m-4 px-2 text-white bg-orange-500 hover:bg-orange-600 text-md py-1 hover:border-gray-500">
            <button type="button" onClick={() => navigate("/doctor/dashboard")}>
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default InputService;

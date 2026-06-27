import { useEffect } from "react";
import { useState } from "react";
function RegisterPatient() {
  const [patient, setPatient] = useState([]);
  // const [timer, setTimer] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [name, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    console.log("user id is :", user.id);
    console.timeEnd("fetch")
    if (!user.id) {
      setError("No user id is found!")
      return;
    }
    setLoading(true);
    fetch(`http://localhost:5000/api/receptionist/${user.id}`)
      .then((res) => {
        // throw new Error("Server erorr: " + res.status)
        return res.json()
      }
      )
      .then((data) => {
        // console.timeEnd("fetch")
        setPatient(data);
        setLoading(false);
      }).catch((error) => {
        console.log(error)
        setError(true);
        setLoading(false);
      });
  }, []);
  async function handleCreatePatient() {
    try {
      const newPatient = await fetch(`http://localhost:5000/api/receptionist/${user.id}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),//turning object to json
      })
      const data = await newPatient.json()
      console.log(data)
    } catch (error) {
      console.log("There is an error inside registerPatient" + error);
      setError(error);
    }
  }

  if (loading) {
    return <h1>Loading ...</h1>
  }
  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>


      <h1 className="flex justify-center mt-[1em] font-bold">Create Patient</h1>
      <div className="mt-[1em] mx-auto grid justify-center p-10 w-1/3 border border-[#00668A] rounded-lg">

        <div className="flex flex-rows gap-[1em]">

          <div className="grid pr-[1em]">
            <label>Name: </label>
            <label>Email: </label>
            <label>Password: </label>
          </div>

          <div className="grid gap-4">
            <input className=" border border-gray-[#00668A] rounded-sm" type="text"
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <input className=" border border-gray-[#00668A] rounded-sm" type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input className=" border border-gray-[#00668A] rounded-sm" type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

        </div>
      </div>
      <div className="grid mx-auto font-semibold mt-[2em] border border-gray-[#00668A] w-[20%] rounded-lg p-[5px] bg-[#1378EC] text-white hover:bg-[#1063C1] text-gray-[400] cursor-pointer">
        <button type="submit" onClick={handleCreatePatient} >Insert</button>
      </div>
    </>
  );
}
// }
export default RegisterPatient;

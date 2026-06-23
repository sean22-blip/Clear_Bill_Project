import { useEffect, useState } from "react";
import hospital from '../../assets/hospital.png'

function Dashboard() {
    const [patient, setPatient] = useState(null);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    useEffect(() => {
        if (!user.user_id) return;
        fetch(`http://localhost:5000/api/patient/dashboard/${user.user_id}`)
            .then(res => res.json())
            .then(data => {
                console.log("API DATA:", data);
                setPatient(data);
            });
    }, []);
    return (
        <>
            <div className="">
                <div className="flex flex-row justify-around border-1 border-gray-300 rounded-lg px-6 mt-6">
                    <div>
                        <div>
                        <h1 className="font-bold text-[20px]">Hello, {patient?.name}</h1>
                        </div>
                        <div>
                            <p className="text-[12px]">Welcome to ClearBill Care </p>
                            <p className="text-[12px]">Your supportive hospital billing partner.</p>
                        </div>
                    </div>
                    <div className="w-30"><img src={hospital} alt="" /></div>
                </div>

            </div>

        </>
    )
}
export default Dashboard;
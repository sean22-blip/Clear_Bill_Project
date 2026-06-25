import { useEffect, useState } from "react";
import hospital from '../../assets/hospital.png'
import rec from '../../assets/rec.png'
import wallet from '../../assets/wallet.png'
import verify from '../../assets/verify.png'
function Dashboard() {
    const [patient, setPatient] = useState();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    useEffect(() => {
        if (!user.id) return;
        fetch(`http://localhost:5000/api/patient/dashboard/${user.id}`)
            .then(res => res.json())
            .then(data => {
                console.log("API DATA:", data);
                setPatient(data);
            });
    }, []);
    return (
        <>
            <div className="ml-4">
                <div className="justify-center  w-[95%]  border-1 border-gray-300 rounded-lg px-6 mt-6">
                <div className=" flex flex-row justify-around   ">
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
                <div className="mt-10 flex flex-row gap-1">
                <div className="text-center border-gray-300 px-0 py-2 rounded-lg border-1 w-[30%]">
                    <div className="  items-center justify-center flex flex-row gap-3">
                        <img src={rec} alt="" />
                        <h3 className="text-[10px] font-semibold text-slate-500">Total Bill</h3>
                    </div>
                    <div>
                        <div className="font-bold">{patient?.totalBills}</div>
                        <h3 className="text-[10px] font-semibold text-slate-500">Bills</h3>
                    </div>
                </div>
                <div className="text-center border-gray-300 px-0 py-2 rounded-lg border-1 w-[35%]">
                    <div className="  items-center justify-center flex flex-row gap-3">
                        <img src={wallet} alt="" />
                        <h3 className="text-[10px] font-semibold text-slate-500">Unpaid Amount</h3>
                    </div>
                    <div>
                        <div className="font-bold text-red-500">$ {patient?.unpaidBills}</div>
                        <h3 className="text-[10px] font-semibold text-red-500">{patient?.unpaidBills} Unpaid</h3>
                    </div>
                </div>
                <div className="text-center border-gray-300 px-0 py-2 rounded-lg border-1 w-[30%] ">
                    <div className="  items-center justify-center flex flex-row gap-3">
                        <img src={verify} alt="" />
                        <h3 className="text-[10px] font-semibold text-slate-500">Paid Bills</h3>
                    </div>
                    <div>
                        <div className="font-bold">{patient?.paidBills}</div>
                        <h3 className="text-[10px] font-semibold text-slate-500">Bills</h3>
                    </div>
                </div>

                </div>
                <div>
                    <div>
                        <h1>Latest Bill</h1>
                        <h1></h1>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Dashboard;
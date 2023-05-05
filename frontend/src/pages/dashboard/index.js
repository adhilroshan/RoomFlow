import Image from "next/image";
import Logo from "../../../public/logo/logo-side.png";
import { useState } from "react";
import DashboardView from "../../components/Dashboard/DashboardView";
import CreateSpaceView from "../../components/Space/CreateSpaceView"

export default function Dashboard() {
    let dashboardItems = [
        {
            name: "Dashboard",
            component: <DashboardView />,
        },
        {
            name: "Create Space",
            component: <CreateSpaceView />,
        }
    ]
    const [selectedItem, setSelectedItem] = useState(dashboardItems[0])
    return (
        <div className="flex">
            <div className="h-screen border border-r-2 border-l-0 border-t-0 border-primary fixed left-0 w-1/4">
                <div className="flex justify-center pt-5">
                    <Image width={200} src={Logo} />
                </div>
                <div className="border border-b-2 border-t-0 border-primary mt-5"></div>
                {
                    dashboardItems.map((item) => {
                        return (
                            <div className="flex justify-center mt-5">
                                <button onClick={() => setSelectedItem(item)} className="bg-slate-500 p-1 rounded-lg text-white px-2 w-72 h-10 hover:bg-slate-700 text-left">{item.name}</button>
                            </div>
                        )
                    })
                }


                <div className="flex  justify-center h-screen">
                    <button className="bg-slate-500 p-1 rounded-lg text-white w-24 h-10 hover:bg-slate-700 absolute bottom-5">Sign Out</button>
                </div>
            </div>
            <div className="ml-52 h-screen flex-1 px-96 pt-10 space-y-10">
                <div>
                    {selectedItem.component}
                </div>
            </div>
        </div>
    );
}

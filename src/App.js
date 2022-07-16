import NavBar from "./Components/Navigation Bar/Nav Bar";
import Todolist from "./Components/Todolist";
export default function App() {

    const todos=
        [
            {
                "id": 1,
                "title": "Reactive dedicated project",
                "description": "Down-sized asynchronous conglomeration",
                "category": "Ameliorated human-resource paradigm",
                "done": false,
                "date": "04/10/2021"
            },
            {
                "id": 2,
                "title": "Optional foreground neural-net",
                "description": "Down-sized system-worthy framework",
                "category": "Multi-lateral demand-driven website",
                "done": false,
                "date": "03/07/2021"
            },
            {
                "id": 3,
                "title": "Inverse value-added service-desk",
                "description": "Multi-tiered reciprocal moratorium",
                "category": "Profit-focused homogeneous pricing structure",
                "done": true,
                "date": "27/11/2021"
            },
            {
                "id": 4,
                "title": "Inverse directional migration",
                "description": "Up-sized high-level leverage",
                "category": "Robust even-keeled solution",
                "done": false,
                "date": "18/07/2021"
            },
            {
                "id": 5,
                "title": "Synchronised empowering paradigm",
                "description": "Open-architected interactive monitoring",
                "category": "Progressive even-keeled info-mediaries",
                "done": true,
                "date": "08/03/2022"
            },
            {
                "id": 6,
                "title": "Switchable bandwidth-monitored challenge",
                "description": "User-centric bottom-line extranet",
                "category": "Balanced homogeneous leverage",
                "done": false,
                "date": "28/02/2022"
            },
            {
                "id": 7,
                "title": "Function-based discrete benchmark",
                "description": "Object-based grid-enabled policy",
                "category": "Monitored hybrid application",
                "done": false,
                "date": "30/05/2022"
            },
            {
                "id": 8,
                "title": "Intuitive dynamic emulation",
                "description": "Open-architected asymmetric installation",
                "category": "Inverse mission-critical frame",
                "done": false,
                "date": "09/10/2021"
            },
            {
                "id": 9,
                "title": "Switchable explicit parallelism",
                "description": "Centralized solution-oriented initiative",
                "category": "Team-oriented attitude-oriented archive",
                "done": true,
                "date": "06/07/2022"
            },
            {
                "id": 10,
                "title": "Cross-group full-range hardware",
                "description": "User-friendly maximized complexity",
                "category": "User-centric needs-based framework",
                "done": false,
                "date": "25/01/2022"
            }
        ]
    return (
        <div>
            <NavBar/>
            <div className="mt-36"> <Todolist todos={todos} /> </div>
        </div>

    )
}
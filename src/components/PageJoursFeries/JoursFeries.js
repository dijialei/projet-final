import JFadmin from "./JFadmin";
import JFuser from "./JFuser";

export default function JoursFeries(){
    const datatest = [{
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    },
    {
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés"
    }
];

const role = "manager";

if (role == "user") {
    return (
        <JFuser datatest={datatest}/>
    );    
}else{
    return(<JFadmin datatest={datatest} />);
}
}
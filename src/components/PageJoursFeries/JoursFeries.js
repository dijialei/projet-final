import JFadmin from "./JFadmin";
import JFrows from "./JFrows";
import JFuser from "./JFuser";

export default function JoursFeries(){
    const datatest = [{
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés1"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés2"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés3"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés4"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés5"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés6"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés7"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés8"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés9"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés10"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés11"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés12"
    },
    {
        id:crypto.randomUUID(),
        date:"02/01/2017",
        type:"RTT",
        jour:"lundi",
        Contents:"jours fériés13"
    }
];

const role = "manager";

if (role == "user") {
    return (
        <JFuser datatest={datatest}/>
    );    
}else{
    return(
    <JFadmin datatest={datatest} />
    
    );
}


}


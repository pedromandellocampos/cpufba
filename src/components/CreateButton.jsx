import { Button } from "@mui/material"



function handleCreateProcess(){
    console.log("teste")
   // setProcesses =[...getProcesses, {quantum: 0, valor2: 0, valor3:0, valor4:0}]

}

export function CreateProcessButton(){
    return(<Button onClick={() => {
        handleCreateProcess();
      }} variant="contained">Criar Processo</Button>);
}
import * as React from "react";
import Box from "@mui/material/Box";
import ProcessInput from "./ProcessInput";
import styles from "./processCard.module.css"

   

export default function ProcessCard() {
        return (
            <div className={styles.processContainer}>
                <span>Processo</span>
                <div className={styles.box}>
                    <ProcessInput name={"Tempo de Chegada"} />
                    
                    <ProcessInput name={"Deadline"} />
                </div>
                <div className={styles.box}>
                    <ProcessInput name={"Prioridade"} />
                    <ProcessInput name={"Tempo de Execução"} />
                </div>
            </div>
        );
}

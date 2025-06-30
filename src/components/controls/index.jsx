import styles from './controls.module.css'
import { Textarea, Button } from "@chakra-ui/react";

export function Controls() {
    return(
        <div className={styles.controls}>
            <div className={styles.textAreaContainer}>
                <Textarea className={styles.textArea} size="md" placeholder="Ask a question..." />
            </div>
            <Button className={styles.button}>
                <SendIcon/>
            </Button>
        </div>
    )
}

function SendIcon () {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-160v-240l320-80-320-80v-240l760 320-760
        320Z"/></svg>
    )
}

export default Controls
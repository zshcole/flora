import { useState } from 'react'
import styles from './controls.module.css'
import { Textarea, Button } from "@chakra-ui/react";

export function Controls({ onSendMessage }) {
    const [content, setContent] = useState('')
    function handleContentChange(e) {
        setContent(e.target.value)
    }
    function handleSendMessage() {
        if (content.length > 0) {
            onSendMessage(content)
            setContent('')
        }
    }
    function handleEnterPress(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }
    return(
        <div className={styles.controls}>
            <div className={styles.textAreaContainer}>
                <Textarea 
                    className={styles.textArea} 
                    size="md" placeholder="Ask a question..."
                    value={content}
                    onChange={handleContentChange}
                    onKeyDown={handleEnterPress}
                />
            </div>
            <Button className={styles.button} onClick={handleSendMessage}>
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
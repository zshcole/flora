
import styles from './chat.module.css'

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "Hello! How can I assist you right now?",
};

function Chat({ messages }) {
    return (
        <div className={styles.chat}>
            {[WELCOME_MESSAGE, ...messages].map(({role, content}, index) => (
                <div className={styles.message} key={index} data-role={role}>
                    <p>{content}</p>
                </div>
            ))}
        </div>
    )
}

export default Chat;
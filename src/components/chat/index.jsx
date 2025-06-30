
import styles from './chat.module.css'

function Chat({ messages }) {
    return (
        <div className={styles.chat}>
            {messages.map(({role, content}, index) => (
                console.log('role', content),
                <div className={styles.message} key={index} data-role={role}>
                    <p>{content}</p>
                </div>
            ))}
        </div>
    )
}

export default Chat;
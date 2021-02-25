import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/58020444?s=460&u=2a389561665e9ee3c7923126706b0ac2351ce39e&v=4" alt="João Neto"/>
            <div>
                <strong>João Neto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    <span>Level 1</span>
                </p>
            </div>
        </div>
    );
}
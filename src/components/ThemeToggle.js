import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './ThemeToggle.css'


export const ThemeToggle = ({isDark,toggleTheme}) => {
    return (
        <div className='switch-theme' onClick={toggleTheme}>
            <div className={`switch-toggle ${isDark ? "dark" : "light"}`}>
                <FontAwesomeIcon icon={isDark ? faMoon : faSun}/>
            </div>
        </div>

    )
}
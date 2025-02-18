import { Link } from "react-router-dom"

const BackButton = ({ children, to = "/app" }) => {
    return (
        <div className="mb-6">
            <Link to={to} className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={12} width={12}>
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
                </svg>
                {children}
            </Link>
        </div>
    )
}

export default BackButton;
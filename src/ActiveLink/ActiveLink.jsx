import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "border-b-4 border-sky-500 pb-1 text-sky-500"
                    : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
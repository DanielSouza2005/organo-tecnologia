import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./CabecalhoLink.css";

interface CabecalhoLinkProps {
    url: string;
    children: ReactNode;
}

const CabecalhoLink = ({ url, children } : CabecalhoLinkProps) => {
    return (
        <Link
            to={url}
            className="link"
        >
            {children}
        </Link>
    );
}

export default CabecalhoLink;
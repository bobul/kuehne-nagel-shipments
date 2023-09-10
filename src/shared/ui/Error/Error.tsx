import * as React from "react";

interface ErrorProps {
    message: string;
    className?: string;
}
export const Error: React.FC<ErrorProps> = ({message, className}) => {
    return (
        <div className={className}>
            <h1>
                {message}
            </h1>
        </div>
    );
};
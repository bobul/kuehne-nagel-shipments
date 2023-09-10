import { Blocks } from "react-loader-spinner";

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
    <div className={className}>
        <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
        />
    </div>
);

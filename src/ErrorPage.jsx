import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

            <img className="w-full h-96" src="https://i.ibb.co/4J1hbV2/images-34.jpg" alt="" /><br />
            <Link to="/"> <h1 className="flex justify-center"><button className="btn btn-sm btn-info">Go To Homepage</button></h1>
</Link>
        </div>
    );
};

export default ErrorPage;
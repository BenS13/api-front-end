
import { useParams } from 'react-router-dom';

function Post(props) {
    let { id } = useParams();
    return (
        <>
        <h1>Post ID: {id}</h1>
        <p>This is where an induvidual post can be viewed</p>
        </>
    );
}

export default Post;
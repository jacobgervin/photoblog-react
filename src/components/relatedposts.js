import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RelatedPosts() {
  const [relatedPosts, setRelatedPosts] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8887/wpapp/wp-json/related-posts/v1/posts')
      .then((response) => {
 
        let modifiedData = response.data.replace(/<a/g, '<Link').replace(/<\/a>/g, '</Link>'); 
        setRelatedPosts(modifiedData);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: relatedPosts }}></div>;
}

export default RelatedPosts;

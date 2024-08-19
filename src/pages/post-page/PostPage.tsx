import { Button } from "flowbite-react";
import { FaThumbsUp  } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ComentSesion from "../../components/commetn";
import { useState } from "react";
import PostCard from "../../components/PostCard";
import { marked } from "marked";

export default function PostPage() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const mockPost = {
    postname: 'Test',
    category: 'Technology',
    poscontent:`# The Rise of Web Development: Trends in 2024

![Web Development](https://www.twintel.net/wp-content/uploads/2023/10/10-25-23.jpg)

Web development has been evolving rapidly, and 2024 is no exception. In this blog post, we'll explore the top trends shaping the industry and what they mean for developers and businesses alike.

## 1. The Growth of Web3 Technologies

![Web3](https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg)

Web3 is no longer just a buzzword. The decentralized web is becoming more mainstream, with blockchain technology at the forefront. Developers are focusing on building decentralized applications (dApps) that offer greater transparency, security, and user control.

### Key Benefits of Web3:
- **Decentralization:** Eliminates the need for intermediaries.
- **Security:** Enhanced encryption and security protocols.
- **User Empowerment:** Users have full control over their data.

## 2. Serverless Architecture Adoption

![Serverless](https://hasonss.com/blogs/wp-content/uploads/2023/10/types-of-technology-2.webp)

Serverless computing is gaining momentum as it offers scalability and cost-efficiency. Developers can now focus on writing code without worrying about managing servers, thanks to platforms like AWS Lambda and Google Cloud Functions.

### Why Go Serverless?
- **Cost-Effective:** Pay only for what you use.
- **Scalability:** Automatically scales with traffic.
- **Faster Time to Market:** Deploy applications quickly.

## 3. The Rise of Jamstack

![Jamstack](https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-2048x1365.jpg)

Jamstack (JavaScript, APIs, and Markup) is revolutionizing web development by decoupling the front-end and back-end. This architecture improves performance, enhances security, and provides a better developer experience.

### Advantages of Jamstack:
- **Performance:** Faster load times and better SEO.
- **Security:** Reduced attack surfaces.
- **Flexibility:** Choose your preferred tools and frameworks.

## 4. AI-Powered Development Tools

![AI Tools](https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg)

Artificial Intelligence is making its way into web development, providing tools that can automate code generation, bug fixing, and even design processes. These tools are enabling developers to work more efficiently and focus on complex tasks.

### Popular AI Tools in 2024:
- **GitHub Copilot:** AI-assisted code completion.
- **Tabnine:** AI-powered code suggestions.
- **DeepCode:** AI-driven code review and optimization.

## 5. Progressive Web Apps (PWAs) on the Rise

(https://www.training.com.au/wp-content/uploads/career-in-technology-feature.png)

Progressive Web Apps (PWAs) continue to bridge the gap between web and mobile applications. PWAs offer offline capabilities, push notifications, and native app-like experiences without requiring users to download an app from the store.

### Why PWAs Matter:
- **Offline Access:** Works even without an internet connection.
- **Push Notifications:** Engages users with real-time updates.
- **Cross-Platform:** Runs on any device with a browser.
## Conclusion
The web development landscape in 2024 is full of exciting opportunities. From Web3 technologies to serverless architectures and AI-powered tools, developers have more resources than ever to create innovative and efficient applications. Embracing these trends will be key to staying ahead in this fast-paced industry.
`,
    postcontenttitle:"Defining Environment Variables",
  };
  const postContentHTML = marked(mockPost.poscontent);
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
      {mockPost.postname}
      </h1>
      <Link
        to={`/`}
        className='self-center mt-5'
      > 
        <Button color='gray' pill size='xs'>
        {mockPost.category}
        </Button>
      </Link>
      <img
          src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
          alt='post cover'
        className='mt-10 p-3 max-h-[600px] w-full object-cover'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span> { new Date().toLocaleDateString()}</span>
        <span className='italic'>
           5 mins read  
        </span>
      </div>
      <div className='p-3 max-w-2xl mx-auto w-full post-content'>
      <div dangerouslySetInnerHTML={{ __html: postContentHTML }} />
      </div>
    <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
              <button
                type='button'
                onClick={handleLikeClick}
                className={` hover:text-blue-500 ${liked ? 'text-blue-500' : ''}`}
              >
                <FaThumbsUp className='text-sm' />
              </button>
              <p className='ml-2 mr-4 mt-2'>
                1 like
              </p>
      <ComentSesion/>
    </div>
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-2xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          <PostCard />
        </div>
      </div>
    </main>
  )
}

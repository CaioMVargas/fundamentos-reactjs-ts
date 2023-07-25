import { Post, PostProps } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

interface Posts extends PostProps{
  id:number;
}

const posts:Posts[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/CaioMVargas.png',
      name: 'Caio Vargas',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, eum ab'},
      {type: 'paragraph', content: 'voluptatum nostrum vitae aliquid dicta, reiciendis itaque perferendis'},
      {type: 'link', content: '#programação #CSS #HTML'},
    ],
    publishedAt: new Date('2023-07-07 10:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/CaioMVargas.png',
      name: 'Caio Vargas',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, eum ab',},
      {type: 'paragraph', content: 'voluptatum nostrum vitae aliquid dicta, reiciendis itaque perferendis',},
      {type: 'link', content: '#programação #CSS #HTML'},
    ],
    publishedAt: new Date('2023-07-08 10:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
           return (
           <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
           )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

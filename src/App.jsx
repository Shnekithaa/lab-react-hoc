import './App.css';
import LikeImage from './components/LikeImage';
import LikeImage2 from './components/LikeImage2';
import LikePost from './components/LikePost';
import LikePost2 from './components/LikePost2';
import RenderProps from './components/renderProps';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/* <LikePost/>
        <LikeImage/> */}
        {/* <LikeImage2 />
        <LikePost2 /> */}
        <RenderProps render = {(count, handleCount) => <LikeImage2 count ={count} handleCount = {handleCount} />}/>
        <RenderProps render = {(count, handleCount) => <LikePost2 count ={count} handleCount = {handleCount} />}/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import contentImage from '../assests/Sample.png';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            likes: this.props.likes,
            isLiked: false
        }
    }

    addLike = () =>{
        if(! this.state.isLiked){
            this.setState({likes: this.state.likes + 1, isLiked: true});
        }   
    }
  render() {
    return (
    <section id={this.props.id}>
      <div class="content">
        <h1>{this.props.heading}</h1>
        <p>{this.props.description}</p>
        <img src={contentImage} alt="placeholder" />

        <div class="content-footer">
            <div class="content-footer-left">
                {this.state.isLiked ? 
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="currentColor" 
                    class="mi-solid mi-thumbs-up" 
                    viewBox="0 0 24 24"
                >
                    <path d="M4 9H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1m17.95 2.06c0-1.11-.9-2.01-2.01-2.01h-5.03c-.25 0-.48 0-.69-.03h-.05c-.48-.06-.82-.19-.87-.46.3-2.27 1.08-5.3-1.67-6.42-1.56-.62-1.95 1.05-1.73 2.24.34 2.17-1.58 3.55-2.77 5.07-.13.2-.12.73-.12.73V18c0 1.11.91 2.01 2.02 2.01h8.46c1.11 0 1.58-.28 2.33-2.25 0 0 1.91-4.57 2.05-4.89s.09-1.82.09-1.82Z"/>
                </svg> : 
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    onClick={() => this.addLike()}
                    width="24" 
                    height="24" 
                    fill="currentColor" 
                    class="mi-outline mi-thumbs-up" 
                    viewBox="0 0 24 24"
                >
                    <path d="M21.99 12.23c0-1.85-1.5-3.35-3.35-3.35h-3.69c.21-1.88.16-4.52-2.64-5.65-.38-.15-.76-.23-1.13-.23-.76 0-1.44.32-1.93.9-.92 1.1-.73 2.61-.65 3 .09.56-.31 1.06-1.16 2.01-.16.18-.32.35-.47.53a2.48 2.48 0 0 0-1.63-.6h-.83a2.5 2.5 0 0 0-2.5 2.5v7.51a2.5 2.5 0 0 0 2.5 2.5h.83c.76 0 1.45-.34 1.91-.88.6.56 1.4.9 2.28.9h7.06c1.99 0 2.8-1.08 3.49-2.91.6-1.44 1.59-3.81 1.69-4.03s.28-.62.22-2.21ZM6.17 18.86c0 .46-.38.83-.83.83h-.83c-.46 0-.83-.37-.83-.83v-7.51c0-.46.37-.83.83-.83h.83c.46 0 .83.38.83.83zm14.07-5.11c-.12.26-1.71 4.08-1.71 4.08-.63 1.65-1.02 1.88-1.95 1.88H9.52c-.93 0-1.68-.75-1.68-1.68V11.5s-.01-.45.1-.61c.99-1.27 2.59-2.42 2.31-4.23-.18-.99.14-2.38 1.45-1.87 2.29.93 1.64 3.46 1.39 5.35.03.22.32.33.72.38h.04c.18.02.37.03.58.03h4.2c.93 0 1.68.75 1.68 1.68 0 0 .05 1.26-.07 1.52"/>
                </svg>
        }
                {this.state.likes}
            </div>
            <div className='content-footer-right'>
                <input type="text" placeholder='Enter your email' /> 
                <button>
                    Subscribe for Beta
                </button>
            </div>
        </div>
        <hr></hr>
      </div>
    </section>
    );
  }
}

export default Content;
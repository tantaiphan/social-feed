export const SocialItemCss = `
.video-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }
  
  .video-card__thumbnail {
    width: 100%;
    height: auto;
  }
  

.video-card__content {
  padding: 15px;
}

@media (min-width: 1200px) {
  
.video-card__content {
  padding: 20px 30px;
}
}
  
  .video-card__emojis {
    font-size: 20px;
  }
  
  .video-card__title {
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0;
  }
  
  .video-card__read-more {
    color: #0073b1;
    text-decoration: none;
    font-size: 14px;
  }
  
  .video-card__channel {
    display: flex;
    align-items: center;
    margin: 10px 0;
    justify-content: space-between;
  }
  
  .video-card__channel-logo {
    border-radius: 50%;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border: 0.5px solid rgba(17, 17, 17, 0.1);
  }
  
  .video-card__channel-name {
    font-size: 14px;
    font-weight: bold;
  }
  
  .video-card__time {
    font-size: 12px;
    color: #555;
    margin-left: auto;
  }
  
  .video-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .video-card__stats {
    display: flex;
    align-items: center;
  }
  
  .video-card__views {
    margin-right: 5px;
  }
  
  .video-card__icon {
    font-size: 16px;
  }
  
  .video-card__share {
    font-size: 14px;
    color: #0073b1;
    cursor: pointer;
    margin-right: 4px;
  }`;

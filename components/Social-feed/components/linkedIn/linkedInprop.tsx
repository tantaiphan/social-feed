/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DataSocialFeedModel } from "../../core/models/MetaType";
import cheerio from 'cheerio';

interface ComponentProps {
  // code
  componentProps: DataSocialFeedModel & { queryKey?: string };
  responseLinkedIn: (userInfo: any) => void;
  value: any;
  hidden?: boolean;
  autoLoad?: boolean;
}

export const LinkedInPlatform: React.FC<ComponentProps> = ({
  responseLinkedIn,
  value,
  hidden,
  autoLoad,
}) => {
  const [user, setUserInfo] = useState<any | undefined>(undefined);

  //   useEffect(() => {
  //     console.log("linkedIn value", value);
  //     setUserInfo(value);
  //   });
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const res = await fetch('https://www.linkedin.com/in/williamhgates');
        const html = await res?.text();


        // Sử dụng cheerio để phân tích cú pháp HTML
        const $ = cheerio.load(html);
        // Trích xuất nội dung của các bài đăng
        const postElements = $('.feed-shared-update-v2 .feed-shared-text__text-view');
        const extractedPosts = postElements.map((index, element) => $(element).text()).get();
        // setPosts(extractedPosts);
        console.log(123);
        console.log(123);
        console.log(html, extractedPosts);
        console.log(123);
        console.log(123);

      } catch (error) {
        console.error("Error retrieving access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  return <div>{"LinkedIn"}</div>;
};

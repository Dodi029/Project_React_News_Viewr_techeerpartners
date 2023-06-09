import React from "react";
import styled from "styled-components";

const NewsItem = ({ article }) => {                                             // 아이템 하나를 받아옴
    const { title, description, url } = article                                 // article 객체를 비구조화 할당

    return (
        <NewsItemBlock>                                                             
            {
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer" >
                        <img src="https://picsum.photos/200" alt="thumbnail"/>
                    </a>
                </div>
            }
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer" >
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};


const NewsItemBlock = styled.div`
    display: flex;
        .thumbnail {
        img {
            margin-right: 1rem;
            width: 160px;
            height: 160px;
            object-fit: cover;    
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: block;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

export default NewsItem

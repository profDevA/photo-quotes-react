import React, {useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Article from '../components/article';

import articleImg2 from '../assets/art2.jpg';
import articleImg3 from '../assets/art3.jpg';
import articleImg4 from '../assets/art4.jpg';
import articleImg5 from '../assets/art5.jpg';
import articleImg6 from '../assets/art6.jpg';
import articleImg7 from '../assets/art7.jpg';
import articleImg8 from '../assets/art8.jpg';
import articleImg9 from '../assets/art9.jpg';

const Blog = () => {
    const [articles, setArticles] = useState([
        {
            articleImage: articleImg2,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: articleImg3,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: articleImg4,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: articleImg5,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: articleImg6,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: articleImg7,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: articleImg8,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: articleImg9,
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
    ]);
    return (
        <>
            <Header />
            <main>
                <section className="container container-blog ptb110">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <h2 className="big-lettering">Blog</h2>
                            <h1 className="mt30 main-title">About Photography</h1>
                        </div>
                        {
                            articles.map(article => <Article articleTitle={article.articleImg2} articleImage={article.articleImage} articleContent={article.articleContent} />)
                        }
                    </div>
                    <div className="row container-more">
                        <a href="#" className="wide-text btn btn__blue-gradient">More articles</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default Blog;
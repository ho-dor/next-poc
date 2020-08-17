import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import {NextSeo} from 'next-seo';
import Link from 'next/link';
import {GetStaticProps} from 'next';

const Index = ({data}) => {
   
    return (
        <Layout>
            <NextSeo 
                title="Books List"
                description="List of all JS Books"
            />
                <div className="bg-purple-400 p-4 text-center">
                    <span><strong>Welcome to the Javascript Book Library</strong></span>
                </div>
                
                <div className="text-center my-4">
                    <span><strong>Books List</strong></span>
                </div>
                
                <div className="grid grid-cols-3">
                    {data ? 
                        data.map((item, i) => {
                        return (
                        <div className="p-4 bg-white m-4 border rounded-lg overflow-hidden">
                                <div className="m-4">
                                    <span><strong>Title : </strong></span><span key={i}>{item.volumeInfo.title}</span>
                                </div>
                                <div className="m-4">
                                    <span><strong>Author : </strong></span><span key={i}>{item.volumeInfo.authors[0]}</span>
                                </div>
                                <div className="m-4">
                                    <span><strong>Publisher : </strong></span><span key={i}>{item.volumeInfo.publisher}</span>
                                </div>
                                <div className="m-4">
                                    <img key={i} src={item.volumeInfo.imageLinks.thumbnail}/>
                                </div>
                                <div className="m-4">
                                    <Link 
                                        href="/books/[id]" 
                                        as={{
                                            pathname: `/books/${i}`,
                                        }}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More</button>
                                    </Link>
                                </div>
                               
                        </div>
                        )
                    }):
                    <span>Loading...</span>
                    }
                </div>
               
        </Layout>
    );
}

export const getStaticProps = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=javascript`);
    const data = await response.json();
    console.log(data);
    return {
        props:{
            data: data.items
        } 
    }
}
export default Index;
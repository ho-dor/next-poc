import Layout from '../../components/layout';

const Book = ({item}) => {
    return (
        <Layout>
            <div className="container">
                <div className="block ml-auto mr-auto mt-4">
                    <img className="block ml-auto mr-auto mt-4" src={item.volumeInfo.imageLinks.thumbnail}/>
                </div>
                <div className="text-center m-4">
                    <span className="font-bold">{item.volumeInfo.title}</span>
                </div>
                <div  className="text-center m-4 flex justify-center"> 
                    <span>{item.volumeInfo.description}</span>
                </div>
            </div>
        </Layout>
       
    )
}

Book.getInitialProps = async (ctx) => {

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=javascript`);
    const data = await response.json();
    
    let res;

    data.items.forEach((item,i) => {
        if(i==ctx.query.id){
            res = item;
        }
    });

    return{
        item: res
    }
}

export default Book;
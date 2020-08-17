import Navbar from './navbar';

const Layout = (props) => {

    return (
        <div className="bg-blue-500 bg-opacity-50">
           <Navbar/>
           {props.children}
        </div>
    )
}



export default Layout;
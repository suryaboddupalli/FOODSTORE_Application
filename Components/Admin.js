function Admin(){
    const logout = () =>{
        sessionStorage.clear();
    }
    return(
        <div className='home'>
            <nav className='navbar bg-dark fixed-top'>
                <div className='container-fluid'>
                   <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'>FOODSTORE</a>
                    </div>
                   <ul className='nav'>
                       <li ><a  className ='nav-link text-light' href='/hotel/add'>Add Hotels</a></li>
                       <li ><a className='nav-link text-light'  href='/recipe/add'>Add Recipe</a></li>
                       <li ><a className='nav-link text-light' href='/profile'>Users</a></li>
                       <li ><a className='nav-link text-light' href ='/login' onClick={logout}>Signout</a></li>
                    </ul>
                </div>
            </nav><br/><br/>
            <div>
                <h2 className='text-center mt-5'>Welcome to Admin Page</h2>
            </div>
        </div>
    )
}
export default Admin
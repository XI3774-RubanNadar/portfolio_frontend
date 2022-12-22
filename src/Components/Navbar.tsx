import React from 'react'
import { Link, NavLink } from 'react-router-dom'

interface navProps {
    title: string,
    path: string
}
type Props = {

}

const NAV_HEADERS: navProps[] = [ { title: 'Home', path: "/" },
{ title: 'Project', path: "/project" },
{ title: 'Resume', path: "/resume" },
{ title: 'Skill & Exp',path:"/skills"},
{ title: 'About Me', path: "/about" }, ]


const Navbar = ( props: Props ) => {
    const [ activeIndex, setActiveIndex ] = React.useState( 0 )
    return (
        <div className=''><nav className="flex flex-row max-h-20 w-full justify-between bg-primaryColor py-5 px-10">
            <div><a className='ml-1 text-2xl  text-primary'>Ruban</a><a className=' text-2xl strokeText'> Nadar</a></div>
            <div className='flex [&>*]:uppercase [&>*]:text-sm [&>*]:text-grayColor [&>*]:font-medium justify-between space-x-8 '>
                { NAV_HEADERS.map( ( header, k ) => <div key={ k.toString() } className={ `header_align ` }>
                    <Link
                        className={ `text-sm text-${activeIndex === k ? 'secondaryColor' : 'grayColor'} font-medium` }
                        onClick={ () => setActiveIndex( k ) }
                        to={ header.path }
                    >{ header.title }</Link>{ activeIndex === k ? <div className='round_active '></div> : null }</div> ) }

            </div>
            <div>
              
                <button className='bg-ternaryColor rounded-3xl px-5 py-2 drop-shadow-lg  '>
                    <h5 className='text-white tracking-wider animate-pulse'>Let's talk</h5>
                </button>
              
            </div>
        </nav>
        </div>
    )
}

export default Navbar
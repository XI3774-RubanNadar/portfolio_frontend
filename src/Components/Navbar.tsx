import React, { useEffect } from 'react'
import * as Scroll from 'react-scroll';
import { Link}    from 'react-scroll'
import Skills from './Skills';

interface navProps {
    title: string,
    path: string
}
type Props = {

}
const Element = Scroll.Element
const NAV_HEADERS: navProps[] = [ { title: 'Home', path: "/" },
{ title: 'Project', path: "/project" },

{ title: 'Skill & Exp',path:"/skills"},
{ title: 'Resume', path: "/resume" },
{ title: 'About Me', path: "/about" }, ]


const Navbar = ( props: Props ) => {
    const [ activeIndex, setActiveIndex ] = React.useState( 0 )
    const [stickyClass, setStickyClass] = React.useState('');
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
      }, []);
    
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
       
          // window height changed for the demo
          windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
      };
    const scrollToPos =(to:unknown)=>{
        console.log(to)
       switch (to)
       {
        case "Home":
            setActiveIndex(0)
            break;
            case "Project":
                setActiveIndex(1)
                break;
                case "Skill & Exp":
                    setActiveIndex(2)

                    break;
       }
     
    }
    return (
        <div className=''><nav className={`flex ${stickyClass} flex-row max-h-20 w-full justify-between bg-primaryColor py-5 px-10`}>
            <div><a className='ml-1 text-2xl  text-primary'>Ruban</a><a className=' text-2xl strokeText'> Nadar</a></div>
            <div className='flex [&>*]:uppercase [&>*]:text-sm [&>*]:text-grayColor [&>*]:font-medium justify-between space-x-8 '>
                { NAV_HEADERS.map( ( header, k ) => <div key={ k+"nav" } className={ `header_align ` }>
                    <Link
                       activeClass="active"
                       onSetActive={ to=> scrollToPos(to)}
                        className={ `text-sm text-${activeIndex === k ? 'secondaryColor' : 'grayColor'} font-medium` }
                     
                        to={header.title}
                        spy={true}
                         smooth={true}
                          offset={50}
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
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';
import '../nav.css';
import { Helmet } from "react-helmet";
import $ from 'jquery';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

export default function Header() {
  
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }

  }, [location.search]);

  

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };


  useEffect(() => {
    jQuery('.open-overlay').on('click',function() {
      jQuery('.open-overlay').css('pointer-events', 'none');
      var overlay_navigation = jQuery('.overlay-navigation'),
        top_bar = jQuery('.bar-top'),
        middle_bar = jQuery('.bar-middle'),
        bottom_bar = jQuery('.bar-bottom');
  
      overlay_navigation.toggleClass('overlay-active');
      if (overlay_navigation.hasClass('overlay-active')) {
  
        top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
        middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
        bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
        overlay_navigation.velocity('transition.slideLeftIn', {
          duration: 300,
          delay: 0,
          begin: function() {
            jQuery('nav ul li').velocity('transition.perspectiveLeftIn', {
              stagger: 150,
              delay: 0,
              complete: function() {
                jQuery('nav ul li aa').velocity({
                  opacity: [1, 0],
                }, {
                  delay: 10,
                  duration: 140
                });
                jQuery('.open-overlay').css('pointer-events', 'auto');
              }
            })
          }
        })
  
      } else {
        jQuery('.open-overlay').css('pointer-events', 'none');
        top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
        middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
        bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
        jQuery('nav ul li').velocity('transition.perspectiveRightOut', {
          stagger: 150,
          delay: 0,
          complete: function() {
            overlay_navigation.velocity('transition.fadeOut', {
              delay: 0,
              duration: 300,
              complete: function() {
                jQuery('nav ul li aa').velocity({
                  opacity: [0, 1],
                }, {
                  delay: 0,
                  duration: 50
                });
                jQuery('.open-overlay').css('pointer-events', 'auto');
              }
            });
          }
        })
      }
    })
  }, []);

  useEffect(() => {
    jQuery('.aboba').on('click',function() {
      jQuery('.open-overlay').css('pointer-events', 'none');
      var overlay_navigation = jQuery('.overlay-navigation'),
        top_bar = jQuery('.bar-top'),
        middle_bar = jQuery('.bar-middle'),
        bottom_bar = jQuery('.bar-bottom');
  
      overlay_navigation.toggleClass('overlay-active');
      if (overlay_navigation.hasClass('overlay-active')) {
  
        top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
        middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
        bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
        overlay_navigation.velocity('transition.slideLeftIn', {
          duration: 300,
          delay: 0,
          begin: function() {
            jQuery('nav ul li').velocity('transition.perspectiveLeftIn', {
              stagger: 150,
              delay: 0,
              complete: function() {
                jQuery('nav ul li aa').velocity({
                  opacity: [1, 0],
                }, {
                  delay: 10,
                  duration: 140
                });
                jQuery('.open-overlay').css('pointer-events', 'auto');
              }
            })
          }
        })
  
      } else {
        jQuery('.open-overlay').css('pointer-events', 'none');
        top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
        middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
        bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
        jQuery('nav ul li').velocity('transition.perspectiveRightOut', {
          stagger: 150,
          delay: 0,
          complete: function() {
            overlay_navigation.velocity('transition.fadeOut', {
              delay: 0,
              duration: 300,
              complete: function() {
                jQuery('nav ul li aa').velocity({
                  opacity: [0, 1],
                }, {
                  delay: 0,
                  duration: 50
                });
                jQuery('.open-overlay').css('pointer-events', 'auto');
              }
            });
          }
        })
      }
    })
  }, []);



  return (
    <Navbar className='border-b-2' style={{boxSizing:'border-box', borderBottom:'1px solid', borderColor:'#E5E7EB', flexWrap:'wrap', display:'flex', flexDirection:'row-reverse', position:'sticky', top:'0px', zIndex:'200'}}>


      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      
      <div className='flex gap-2 md:order-2'>
        
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Профиль</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Выйти</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Войти
            </Button>
          </Link>
        )}
        <Navbar.Toggle />


      </div>
          <div className="menu-icon-wrapper">
              <div className="open-overlay">
                <span className="bar-top"></span>
                <span className="bar-middle"></span>
                <span className="bar-bottom"></span>
              </div>
      </div>


      <Navbar.Collapse>

  
      <div className="overlay-navigation">
          <nav role="navigation">
            <ul className='boba'>
            <li className='aboba'><aa>      <Link to='/' >Home</Link>      </aa></li>
              <li className='aboba'><aa><Link to='/about' >About</Link>     </aa></li>
              <li className='aboba'><aa><Link to='/projects' >Projects</Link>      </aa></li>
              <li className='aboba'><aa><Link to='/search' >Blog</Link>    </aa></li>
              <li className='aboba'><aa><Link to='/contact' >Contact</Link> </aa></li>
            </ul>
          </nav>
        </div>
      </Navbar.Collapse>

    </Navbar>
    
  );
}

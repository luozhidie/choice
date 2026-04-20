'use client'  
  
import Link from 'next/link'  
import { useClerk, UserButton } from '@clerk/nextjs'  
  
export default function Header() {  
  const { isSignedIn } = useClerk()  
  
  return (  
    <header style={styles.header}>  
      <nav style={styles.nav}>  
        {/* Logo */}  
        <Link href="/" style={styles.logo}>  
          🦋 骆芷蝶智选  
        </Link>  
  
        {/* 导航菜单 */}  
        <div style={styles.menu}>  
          <Link href="/suppliers" style={styles.link}>供应商</Link>  
          <Link href="/courses" style={styles.link}>课程</Link>  
          <Link href="/about" style={styles.link}>关于我们</Link>  
          <Link href="/contact" style={styles.link}>联系我们</Link>  
        </div>  
  
        {/* 用户按钮 */}  
        <div style={styles.auth}>  
          {isSignedIn ? (  
            <UserButton afterSignOutUrl="/" />  
          ) : (  
            <Link href="/sign-in" style={styles.loginBtn}>  
              登录  
            </Link>  
          )}  
        </div>  
      </nav>  
    </header>  
  )  
}  
  
const styles = {  
  header: {  
    background: '#fff',  
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',  
    position: 'fixed' as const,  
    width: '100%',  
    top: 0,  
    zIndex: 1000,  
  },  
  nav: {  
    display: 'flex',  
    justifyContent: 'space-between',  
    alignItems: 'center',  
    padding: '1rem 5%',  
    maxWidth: '1200px',  
    margin: '0 auto',  
  },  
  logo: {  
    fontSize: '1.5rem',  
    fontWeight: 'bold',  
    color: '#e91e63',  
    textDecoration: 'none',  
  },  
  menu: {  
    display: 'flex',  
    gap: '2rem',  
  },  
  link: {  
    color: '#333',  
    textDecoration: 'none',  
    fontWeight: '500',  
    transition: 'color 0.3s',  
  },  
  auth: {  
    display: 'flex',  
    alignItems: 'center',  
  },  
  loginBtn: {  
    background: '#e91e63',  
    color: 'white',  
    padding: '0.5rem 1.5rem',  
    borderRadius: '20px',  
    textDecoration: 'none',  
    fontWeight: 'bold',  
  },  
}  
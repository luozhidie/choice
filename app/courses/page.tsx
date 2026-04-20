import Link from 'next/link'  
  
export default function CoursesPage() {  
  return (  
    <div>  
      {/* 首屏 */}  
      <section style={styles.hero}>  
        <h1 style={styles.heroTitle}>🎓 选品课程</h1>  
        <p style={styles.heroSubtitle}>  
          零基础也能学会的选品实战课程，7 天掌握核心技能  
        </p>  
      </section>  
  
      {/* 课程卡片 */}  
      <section style={styles.courses}>  
        <div style={styles.courseCard}>  
          <h2 style={styles.courseTitle}> 服装选品入门 7 天课</h2>  
          <p style={styles.courseDesc}>  
            专为服装创业新手设计的系统课程，从供应链基础到实战选品，  
            7 天带你入门服装行业。  
          </p>  
            
          <div style={styles.price}>  
            <span style={styles.priceCurrent}>¥99</span>  
            <span style={styles.priceOriginal}>原价¥299</span>  
          </div>  
  
          <h3 style={styles.syllabusTitle}>课程大纲：</h3>  
          <ul style={styles.syllabus}>  
            <li>Day 1：认识服装供应链</li>  
            <li>Day 2：如何找到靠谱供应商</li>  
            <li>Day 3：选品核心逻辑</li>  
            <li>Day 4：拿货谈判技巧</li>  
            <li>Day 5：库存管理方法</li>  
            <li>Day 6：品质把控流程</li>  
            <li>Day 7：实战演练</li>  
          </ul>  
  
          <Link href="/contact" style={styles.btnPrimary}>  
            立即报名  
          </Link>  
        </div>  
      </section>  
  
      {/* 课程优势 */}  
      <section style={styles.features}>  
        <h2 style={styles.sectionTitle}>课程优势</h2>  
        <div style={styles.featuresGrid}>  
          {features.map((feature, index) => (  
            <div key={index} style={styles.featureCard}>  
              <div style={styles.featureIcon}>{feature.icon}</div>  
              <h3 style={styles.featureTitle}>{feature.title}</h3>  
              <p style={styles.featureDesc}>{feature.desc}</p>  
            </div>  
          ))}  
        </div>  
      </section>  
    </div>  
  )  
}  
  
const features = [  
  { icon: '📖', title: '系统教学', desc: '从基础到实战的完整体系' },  
  { icon: '💼', title: '实战导向', desc: '真实案例 + 实操练习' },  
  { icon: '👥', title: '社群学习', desc: '与同行交流学习经验' },  
  { icon: '🎯', title: '持续更新', desc: '行业动态实时更新' },  
]  
  
const styles = {  
  hero: {  
    background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',  
    padding: '150px 5% 100px',  
    textAlign: 'center' as const,  
  },  
  heroTitle: {  
    fontSize: '3rem',  
    marginBottom: '1rem',  
    color: '#1a1a1a',  
  },  
  heroSubtitle: {  
    fontSize: '1.3rem',  
    color: '#555',  
  },  
  courses: {  
    padding: '80px 5%',  
    background: '#fff',  
  },  
  courseCard: {  
    maxWidth: '800px',  
    margin: '0 auto',  
    background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',  
    color: 'white',  
    padding: '3rem',  
    borderRadius: '15px',  
  },  
  courseTitle: {  
    fontSize: '2rem',  
    marginBottom: '1rem',  
  },  
  courseDesc: {  
    fontSize: '1.1rem',  
    marginBottom: '2rem',  
    opacity: 0.9,  
  },  
  price: {  
    fontSize: '2.5rem',  
    fontWeight: 'bold',  
    margin: '2rem 0',  
  },  
  priceCurrent: {  
    color: 'white',  
  },  
  priceOriginal: {  
    fontSize: '1.2rem',  
    textDecoration: 'line-through',  
    opacity: 0.7,  
    marginLeft: '1rem',  
  },  
  syllabusTitle: {  
    fontSize: '1.5rem',  
    marginTop: '2rem',  
    marginBottom: '1rem',  
  },  
  syllabus: {  
    listStyle: 'none',  
    padding: 0,  
    marginBottom: '2rem',  
  },  
  btnPrimary: {  
    background: 'white',  
    color: '#e91e63',  
    padding: '1rem 2rem',  
    borderRadius: '30px',  
    textDecoration: 'none',  
    fontWeight: 'bold',  
    display: 'inline-block',  
    fontSize: '1.1rem',  
  },  
  features: {  
    padding: '80px 5%',  
    background: '#fafafa',  
  },  
  sectionTitle: {  
    textAlign: 'center' as const,  
    fontSize: '2rem',  
    marginBottom: '3rem',  
    color: '#1a1a1a',  
  },  
  featuresGrid: {  
    display: 'grid',  
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',  
    gap: '2rem',  
    maxWidth: '1200px',  
    margin: '0 auto',  
  },  
  featureCard: {  
    textAlign: 'center' as const,  
    padding: '2rem',  
    borderRadius: '10px',  
    background: 'white',  
  },  
  featureIcon: {  
    fontSize: '3rem',  
    marginBottom: '1rem',  
  },  
  featureTitle: {  
    marginBottom: '0.5rem',  
    color: '#1a1a1a',  
  },  
  featureDesc: {  
    color: '#666',  
  },  
}  